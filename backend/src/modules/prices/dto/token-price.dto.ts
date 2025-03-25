import { ApiProperty } from '@nestjs/swagger';

export type IntermediaryData = {
  chainId: number;
  tokenAddress: string;
  price: number;
  timestamp: number;
};

export class TokenPriceListDto {
  @ApiProperty()
  time: number;

  @ApiProperty()
  open: number;

  @ApiProperty()
  high: number;

  @ApiProperty()
  low: number;

  @ApiProperty()
  close: number;
}
