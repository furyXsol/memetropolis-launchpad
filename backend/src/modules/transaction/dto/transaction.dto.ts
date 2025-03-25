import { ApiProperty } from '@nestjs/swagger';

export class TransactionDto {
  @ApiProperty()
  chainId: number;

  @ApiProperty()
  type: string;

  @ApiProperty()
  tokenAmount: string;

  @ApiProperty()
  blockTimestamp: string;

  @ApiProperty()
  hash: string;

  @ApiProperty()
  sourceEid: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  ethAmount: string;

  @ApiProperty()
  ethAmountInUsd: string;
}
