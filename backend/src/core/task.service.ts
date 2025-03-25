import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TokensService } from './tokens.service';
import { AccountsService } from './accounts.service';
import { SUPPORT_CHAIN_IDS } from 'src/core/lib/constants';
import { SolanaTokenService } from './solana_token.service';
import { PriceService } from './price.service';
import { RedisService } from './redis.service';

type Config = {
  IS_CRON_ACTIVE: string;
};

@Injectable()
export class TaskService {
  private readonly logger = new Logger(TaskService.name);
  private SYNCING: { [key: string]: boolean } = {};

  constructor(
    private readonly tokens: TokensService,
    private readonly accounts: AccountsService,
    private readonly solanaPumpfun: SolanaTokenService,
    private readonly price: PriceService,
    private readonly redis: RedisService,
    private readonly config: ConfigService,
  ) {
    const isCronActive =
      this.config.get<Config>('app').IS_CRON_ACTIVE !== 'false';
    this.SYNCING['syncNativeTokenPrice'] = !isCronActive;
    this.SYNCING['syncTokenPurchased'] = !isCronActive;
    this.SYNCING['syncTokens'] = !isCronActive;
    this.SYNCING['syncAccountBalances'] = !isCronActive;
    this.SYNCING['syncTransferEvents'] = !isCronActive;
    this.SYNCING['syncSolanaLaunchpadEvents'] = !isCronActive;
    this.SYNCING['syncPurchaseHistoryEvents'] = !isCronActive;
    this.SYNCING['syncSolanaPumpfunEvents'] = !isCronActive;
  }

  @Cron(CronExpression.EVERY_30_SECONDS)
  async syncNativeTokenPrice() {
    if (this.SYNCING['syncNativeTokenPrice']) return;
    console.log('syncing native token price');
    try {
      this.SYNCING['syncNativeTokenPrice'] = true;
      const price: { [chainId: number]: number } | null =
        await this.price.getPriceFromCoingecko();
      if (price) {
        await this.redis.set('price', JSON.stringify(price));
      }
    } catch (error) {
      this.logger.error('Sync Native token Price: ', JSON.stringify(error));
    } finally {
      this.SYNCING['syncNativeTokenPrice'] = false;
    }
  }

  @Cron('*/15 * * * * *')
  async syncTokens() {
    if (this.SYNCING['syncTokens']) return;
    console.log('syncing Tokens');
    try {
      this.SYNCING['syncTokens'] = true;
      for (const chainId of SUPPORT_CHAIN_IDS) {
        await this.tokens.syncTokens(chainId);
      }
    } catch (error) {
      this.logger.error('Sync Tokens: ', JSON.stringify(error));
    } finally {
      this.SYNCING['syncTokens'] = false;
    }
  }

  @Cron('*/15 * * * * *')
  async syncAccountBalances() {
    if (this.SYNCING['syncAccountBalances']) return;
    console.log('syncing AccountBalances');
    try {
      this.SYNCING['syncAccountBalances'] = true;
      for (const chainId of SUPPORT_CHAIN_IDS) {
        await this.accounts.syncAccountBalances(chainId);
      }
    } catch (error) {
      this.logger.error('Sync AccountBalances: ', JSON.stringify(error));
    } finally {
      this.SYNCING['syncAccountBalances'] = false;
    }
  }

  @Cron('*/15 * * * * *')
  async syncTransferEvents() {
    if (this.SYNCING['syncTransferEvents']) return;
    console.log('syncing TransferEvents');
    try {
      this.SYNCING['syncTransferEvents'] = true;
      for (const chainId of SUPPORT_CHAIN_IDS) {
        await this.tokens.syncTransferEvents(chainId);
      }
    } catch (error) {
      this.logger.error('Sync TransferEvents: ', JSON.stringify(error));
    } finally {
      this.SYNCING['syncTransferEvents'] = false;
    }
  }

  @Cron('*/15 * * * * *')
  async syncPurchaseHistoryEvents() {
    if (this.SYNCING['syncPurchaseHistoryEvents']) return;
    console.log('syncing Purchase History Events');
    try {
      this.SYNCING['syncPurchaseHistoryEvents'] = true;
      for (const chainId of SUPPORT_CHAIN_IDS) {
        await this.accounts.syncPurchaseHistories(chainId);
      }
    } catch (error) {
      this.logger.error('Sync PurchaseHistoryEvents: ', JSON.stringify(error));
    } finally {
      this.SYNCING['syncPurchaseHistoryEvents'] = false;
    }
  }

  @Cron('*/15 * * * * *')
  async syncSolanaPumpfunEvents() {
    if (this.SYNCING['syncSolanaPumpfunEvents']) return;
    console.log('syncing Solana Pumpfun Events');
    try {
      this.SYNCING['syncSolanaPumpfunEvents'] = true;
      await this.solanaPumpfun.syncSolanaPumpfunEvents();
    } catch (error) {
      this.logger.error('Sync SolanaPumpfunEvents: ', JSON.stringify(error));
    } finally {
      this.SYNCING['syncSolanaPumpfunEvents'] = false;
    }
  }
}
