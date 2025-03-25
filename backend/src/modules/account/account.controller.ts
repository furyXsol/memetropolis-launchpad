import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { TraderListOutputDto, RecentTokenListOutputDto } from './dto';

@ApiTags('Account')
@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Get('/top-traders')
  @ApiOperation({
    summary: 'Get Top Traders',
  })
  @ApiResponse({
    status: 200,
    type: TraderListOutputDto,
    description: 'Get Recent Transactions from Token address',
  })
  async getTopTraders(): Promise<TraderListOutputDto> {
    return this.service.getTopTraders();
  }

  @Get('/recent-tokens')
  @ApiOperation({
    summary: 'Get Recent Tokens',
  })
  @ApiResponse({
    status: 200,
    type: RecentTokenListOutputDto,
    description: 'Get Tokens user created',
  })
  @ApiQuery({
    name: 'walletAddress',
    type: String,
    required: true,
    description: 'Wallet Address',
  })
  async getRecentTokens(
    @Query('walletAddress') walletAddress: string,
  ): Promise<RecentTokenListOutputDto> {
    return this.service.getRecentTokens(walletAddress);
  }
}
