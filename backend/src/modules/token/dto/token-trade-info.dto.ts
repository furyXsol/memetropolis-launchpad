import { ApiProperty } from '@nestjs/swagger';

export class TokenTradeInfoDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  chainId: number;

  @ApiProperty()
  priceChange5m: number;

  @ApiProperty()
  priceChange1h: number;

  @ApiProperty()
  priceChange6h: number;

  @ApiProperty()
  priceChange24h: number;

  @ApiProperty()
  transactionCount: number;

  @ApiProperty()
  volume: number;

  @ApiProperty()
  makerCount: number;

  @ApiProperty()
  buyTokenAmount: number;

  @ApiProperty()
  buyVolume: number;

  @ApiProperty()
  sellTokenAmount: number;

  @ApiProperty()
  sellVolume: number;
}
