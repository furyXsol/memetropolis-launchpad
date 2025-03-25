import { ApiProperty } from '@nestjs/swagger';

export class RecentTokenDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  decimals: number;

  @ApiProperty()
  chain_id: number;

  @ApiProperty()
  image: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  volumeTotal: string;

  @ApiProperty()
  volumeAveragePerTrade: string;

  @ApiProperty()
  priceInUsd: string;

  @ApiProperty()
  marketCap: string;
}
