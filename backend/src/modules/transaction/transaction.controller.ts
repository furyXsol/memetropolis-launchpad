import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TransactionService } from './transaction.service';
import { TransactionListOutputDto } from './dto/list.output.dto';

@ApiTags('Transaction')
@Controller('transaction')
export class TransactionController {
  constructor(private readonly service: TransactionService) {}

  @Get('recent')
  @ApiOperation({
    summary: 'Sign in with signature',
  })
  @ApiResponse({
    status: 200,
    type: TransactionListOutputDto,
    description: 'Get Recent Transactions from Token address',
  })
  @ApiQuery({
    name: 'chainId',
    type: String,
    required: true,
    description: 'Chain id',
  })
  @ApiQuery({
    name: 'tokenAddress',
    type: String,
    required: true,
    description: 'Token Address',
  })
  async getRecentTransactions(
    @Query('chainId') chainId: string,
    @Query('tokenAddress') tokenAddress: string,
  ): Promise<TransactionListOutputDto> {
    if (!chainId || !tokenAddress) {
      throw new BadRequestException('Token address and chain ID are required');
    }

    return this.service.getRecentTransactions(chainId, tokenAddress);
  }
}
