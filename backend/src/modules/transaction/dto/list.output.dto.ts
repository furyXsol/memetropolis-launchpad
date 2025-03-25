import { ApiProperty } from '@nestjs/swagger';
import { TransactionDto } from './transaction.dto';

export class TransactionListOutputDto {
  @ApiProperty({ type: TransactionDto, isArray: true })
  transactions: TransactionDto[];
}
