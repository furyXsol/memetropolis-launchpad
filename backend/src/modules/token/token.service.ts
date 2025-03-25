import { BadRequestException, Injectable } from '@nestjs/common';
import { Decimal, JsonValue } from '@prisma/client/runtime/library';
import { PrismaService } from '../../core/prisma.service';
import { PriceService } from '../../core/price.service';
import { EVM_MAX_SUPPLY } from '../../core/lib/constants';
import { TokenListOutputDto } from './dto/list.output.dto';
import { TokenDto } from './dto/token.dto';
import { UpdateTokenInputDto } from './dto/update-token.input.dto';
import { UpdateTokenOutputDto } from './dto/update-token.output.dto';
import { TokenTradeInfoDto } from './dto/token-trade-info.dto';
import { CreateTokenInputDto } from './dto/create-token.input.dto';
import { generateRandomString } from '../../core/lib/utils';
import { SetChatPinnedInputDto } from './dto/set-chat-pinned.input.dto';
import { SetChatPinnedOutputDto } from './dto/set-chat-pinned.output.dto';
import { CHAIN_IDS } from 'src/core/lib/enums';
import { isAddress as isEvmAddress } from 'ethers/lib/utils';
@Injectable()
export class TokenService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly price: PriceService,
  ) {}

  async create(input: CreateTokenInputDto): Promise<UpdateTokenOutputDto> {
    const socials = {
      facebook: input.facebook ? input.facebook : '',
      x: input.x ? input.x : '',
      telegram: input.telegram ? input.telegram : '',
    };

    const token = await this.prisma.token.findUnique({
      where: {
        address_chain_id: {
          address: input.tokenAddress.toLowerCase(),
          chain_id: parseInt(input.chainId),
        },
      },
    });
    if (token) {
      await this.prisma.token.update({
        where: {
          id: token.id,
        },
        data: {
          sales_ratio: input.salesRatio ? input.salesRatio.toString() : '80',
          reserved_ratio: input.reservedRatio
            ? input.reservedRatio.toString()
            : '0',
          liquidity_ratio: input.liquidityRatio
            ? input.liquidityRatio.toString()
            : '20',
          launch_date_timestamp: input.launchDate ? input.launchDate : 0,
          limit_per_user_in_decimal: input.maximumPerUser
            ? input.maximumPerUser.toString()
            : '0',
          meta: input.meta ? input.meta.toString() : '',
          image: input.image ? input.image : '',
          socials,
        },
      });

      return {
        success: true,
        message: 'Updated token information',
      };
    }

    let account = await this.prisma.account.findUnique({
      where: {
        address: isEvmAddress(input.ownerAddress)
          ? input.ownerAddress.toLowerCase()
          : input.ownerAddress,
      },
    });
    if (!account) {
      const name = generateRandomString(10);
      account = await this.prisma.account.create({
        data: {
          address: isEvmAddress(input.ownerAddress)
            ? input.ownerAddress.toLowerCase()
            : input.ownerAddress,
          name,
        },
      });
    }

    await this.prisma.token.create({
      data: {
        address: input.tokenAddress.toLowerCase(),
        name: input.name,
        symbol: input.symbol,
        image: input.image,
        chain_id: parseInt(input.chainId),
        socials,
        creation_timestamp: 0,
        decimals: input.decimals,
        current_holder_count: BigInt(0),
        transfer_count: BigInt(0),
        mint_count: BigInt(0),
        burn_count: BigInt(0),
        total_supply: '0',
        total_minted: '0',
        owner_account_id: account.id,
        price: '0',
        price_in_decimal: '0',
        sales_ratio: input.salesRatio ? input.salesRatio.toString() : '80',
        reserved_ratio: input.reservedRatio
          ? input.reservedRatio.toString()
          : '0',
        liquidity_ratio: input.liquidityRatio
          ? input.liquidityRatio.toString()
          : '20',
        launch_date_timestamp: input.launchDate,
        limit_per_user_in_decimal: input.maximumPerUser
          ? input.maximumPerUser.toString()
          : '0',
        meta: input.meta ? input.meta.toString() : '',
        volume: '0',
      },
    });

    return {
      success: true,
      message: 'Created token information',
    };
  }

  async update(input: UpdateTokenInputDto): Promise<UpdateTokenOutputDto> {
    const socials = {
      facebook: input.facebook,
      x: input.x,
      linkedin: input.linkedin,
    };

    await this.prisma.token.update({
      where: {
        address_chain_id: {
          address: input.tokenAddress,
          chain_id: parseInt(input.chainId),
        },
      },
      data: {
        socials,
        banner: input.banner,
        description: input.description,
      },
    });

    return {
      success: true,
      message: 'Updated token information',
    };
  }

  async getTokenList(
    chainId?: string,
    meta?: string,
    bondingStatus?: string,
    sortBy?: string,
  ): Promise<TokenListOutputDto> {
    const where: any = {};
    const orderBy: any = {};
    if (chainId) {
      where.chain_id = Number(chainId);
    }
    if (meta) {
      where.meta = meta;
    }
    if (bondingStatus) {
      if (bondingStatus === 'bonded') where.is_funding_finished = true;
      else where.is_funding_finished = false;
    }
    if (sortBy) {
      if (sortBy === 'volume') orderBy.volume = 'desc';
      else if (sortBy === 'marketCapAggregate') orderBy.token_sold = 'desc';
      else if (sortBy === 'marketCapPerChain') orderBy.token_sold = 'desc';
      else if (sortBy === 'priceChange') orderBy.price = 'desc';
      else if (sortBy === 'txns') orderBy.transfer_count = 'desc';
      else if (sortBy === 'holders') orderBy.current_holder_count = 'desc';
      else if (sortBy === 'liquidity') orderBy.token_sold = 'desc';
      else if (sortBy === 'launchDate') orderBy.creation_timestamp = 'desc';
    }

    const tokens = await this.prisma.token.findMany({
      where,
      orderBy,
      include: {
        owner: true,
      },
      // take: 15,
    });

    return {
      tokens: await Promise.all(
        tokens.map((token) => this.mapToTokenDto(token)),
      ),
    };
  }

  async getTopMarketcapTokenList(limit: number): Promise<TokenListOutputDto> {
    const tokens = await this.prisma.token.findMany({
      where: {
        is_funding_finished: false,
      },
      orderBy: {
        token_sold: 'desc',
      },
      include: {
        owner: true,
      },
      take: parseInt(limit.toString()),
    });

    return {
      tokens: await Promise.all(
        tokens.map((token) => this.mapToTokenDto(token)),
      ),
    };
  }

  async getToken(chainId: string, address: string): Promise<TokenDto> {
    const chain_id = parseInt(chainId);
    const token = await this.prisma.token.findUnique({
      where: {
        address_chain_id: {
          address:
            chain_id === CHAIN_IDS.SOLANA ? address : address.toLowerCase(),
          chain_id: parseInt(chainId),
        },
      },
      include: {
        owner: true,
      },
    });

    if (!token) throw new BadRequestException('Token not found');

    return this.mapToTokenDto(token);
  }

  async getTokenTradeInfo(
    chainId: string,
    address: string,
  ): Promise<TokenTradeInfoDto> {
    const token = await this.prisma.token.findUnique({
      where: {
        address_chain_id: {
          address: address.toLowerCase(),
          chain_id: parseInt(chainId),
        },
      },
    });

    if (!token) throw new BadRequestException('Token not found');

    const purchaseHistories = await this.prisma.purchaseHistory.findMany({
      where: {
        chain_id: parseInt(chainId),
        token_id: token.id,
      },
      orderBy: {
        block_timestamp: 'desc',
      },
    });

    const currentPrice = parseFloat(token.price_in_decimal.toString());
    const currentTime = Date.now() / 1000;

    const keyArray = ['5min', '1hr', '6hr', '24hr'];
    const intervals = {
      '5min': 5 * 60,
      '1hr': 60 * 60,
      '6hr': 6 * 60 * 60,
      '24hr': 24 * 60 * 60,
    };
    const closestPrices: Record<string, { percentChange: string }> = {
      '5min': { percentChange: '0' },
      '1hr': { percentChange: '0' },
      '6hr': { percentChange: '0' },
      '24hr': { percentChange: '0' },
    };
    const found = { '5min': false, '1hr': false, '6hr': false, '24hr': false };

    let totalVolume = 0;
    let buyVolume = 0;
    let buyTokenAmount = 0;
    let sellTokenAmount = 0;
    const uniqueAccounts = new Set<string>();
    for (const history of purchaseHistories) {
      const historyTimestamp = parseInt(history.block_timestamp.toString());
      const historyPrice = parseFloat(
        history.token_price_in_decimal.toString(),
      );
      uniqueAccounts.add(history.account_id);

      for (const key of keyArray) {
        // Check each interval if it hasn't been found yet
        if (!found[key] && historyTimestamp <= currentTime - intervals[key]) {
          const percentChange =
            ((currentPrice - historyPrice) / historyPrice) * 100;
          closestPrices[key].percentChange = percentChange.toFixed(2);
          found[key] = true;
        }
      }

      totalVolume += parseFloat(history.eth_amount_in_usd.toString());
      if (history.type === 'buy') {
        buyVolume += parseFloat(history.eth_amount_in_usd.toString());
        buyTokenAmount += parseFloat(history.amount_in_decimal.toString());
      } else
        sellTokenAmount += parseFloat(history.amount_in_decimal.toString());
    }

    return {
      address,
      chainId: parseInt(chainId),
      priceChange5m: parseFloat(closestPrices['5min'].percentChange),
      priceChange1h: parseFloat(closestPrices['1hr'].percentChange),
      priceChange6h: parseFloat(closestPrices['6hr'].percentChange),
      priceChange24h: parseFloat(closestPrices['24hr'].percentChange),
      transactionCount: purchaseHistories.length,
      volume: totalVolume,
      makerCount: uniqueAccounts.size,
      buyTokenAmount,
      buyVolume,
      sellTokenAmount,
      sellVolume: totalVolume - buyVolume,
    };
  }

  async getTokenListByCategory(category: string): Promise<TokenListOutputDto> {
    if (!['top', 'new', 'hot', 'chain'].includes(category)) {
      throw new BadRequestException('Invalid category');
    }

    if (category === 'top') {
      const tokens = await this.prisma.token.findMany({
        orderBy: {
          current_holder_count: 'desc',
        },
        take: 3,
        include: {
          owner: true,
        },
      });
      return {
        tokens: await Promise.all(
          tokens.map((token) => this.mapToTokenDto(token)),
        ),
      };
    } else if (category === 'new') {
      const tokens = await this.prisma.token.findMany({
        orderBy: {
          created_at: 'desc',
        },
        take: 3,
        include: {
          owner: true,
        },
      });
      return {
        tokens: await Promise.all(
          tokens.map((token) => this.mapToTokenDto(token)),
        ),
      };
    } else if (category === 'hot') {
      // Hot tokens
      const tokens = await this.prisma.token.findMany({
        orderBy: {
          transfer_count: 'desc',
        },
        take: 3,
        include: {
          owner: true,
        },
      });

      return {
        tokens: await Promise.all(
          tokens.map((token) => this.mapToTokenDto(token)),
        ),
      };
    }
  }

  async mapToTokenDto(
    token: {
      owner: {
        id: string;
        address: string;
        name: string;
        image: string;
        socials: JsonValue;
        created_at: Date;
        updated_at: Date;
      };
    } & {
      symbol: string;
      id: string;
      address: string;
      name: string;
      banner: string | null;
      decimals: number;
      chain_id: number;
      current_holder_count: bigint;
      transfer_count: bigint;
      mint_count: bigint;
      burn_count: bigint;
      total_supply: string;
      total_minted: string;
      owner_account_id: string;
      creation_timestamp: number;
      price: string;
      price_in_decimal: Decimal;
      image: string | null;
      description: string | null;
      token_sold: Decimal;
      is_funding_finished: boolean;
      socials: JsonValue;
      created_at: Date;
      updated_at: Date;
      meta: string;
      volume: string;
    },
  ): Promise<TokenDto> {
    const usdPrice = await this.price.getNativeTokenPrice(token.chain_id);
    const marketcap = (
      parseFloat(token.price_in_decimal.toString()) *
      usdPrice *
      parseInt(EVM_MAX_SUPPLY)
    ).toFixed(2);
    return {
      id: token.id,
      address: token.address,
      chainId: token.chain_id,
      name: token.name,
      banner: token.banner || '',
      symbol: token.symbol,
      image: token.image,
      description: token.description,
      decimals: token.decimals,
      currentHolderCount: token.current_holder_count.toString(),
      transferCount: token.transfer_count.toString(),
      mintCount: token.mint_count.toString(),
      burnCount: token.burn_count.toString(),
      totalSupply: token.total_supply.toString(),
      creationTimestamp: token.creation_timestamp,
      priceInDecimal: token.price_in_decimal.toString(),
      tokenSold: token.token_sold.toString(),
      isFundingFinished: token.is_funding_finished,
      socials: JSON.stringify(token.socials),
      owner: token.owner.address,
      ownerName: token.owner.name,
      ownerImage: token.owner.image,
      ownerSocial: JSON.stringify(token.owner.socials),
      marketcap,
      meta: token.meta.toString(),
      volume: token.volume,
    };
  }

  async setChatPinned(
    input: SetChatPinnedInputDto,
  ): Promise<SetChatPinnedOutputDto> {
    const { tokenId, isPinned } = input;

    // Update the token's pinned status in the database
    await this.prisma.token.update({
      where: {
        id: tokenId,
      },
      data: {
        is_chat_pinned: isPinned === 'true',
      },
    });

    return {
      success: true,
      tokenId,
      isPinned: isPinned == 'true',
    };
  }

  async getPinnedTokens(): Promise<TokenListOutputDto> {
    const tokens = await this.prisma.token.findMany({
      where: {
        is_chat_pinned: true,
      },
      include: {
        owner: true,
      },
      orderBy: {
        updated_at: 'desc',
      },
    });

    return {
      tokens: await Promise.all(
        tokens.map((token) => this.mapToTokenDto(token)),
      ),
    };
  }
}
