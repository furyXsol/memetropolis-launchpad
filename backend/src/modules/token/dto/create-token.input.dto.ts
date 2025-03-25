import { ApiProperty } from '@nestjs/swagger';

export class CreateTokenInputDto {
  @ApiProperty()
  chainId: string;

  @ApiProperty()
  tokenAddress: string;

  @ApiProperty()
  ownerAddress: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  decimals: number;

  @ApiProperty()
  facebook: string;

  @ApiProperty()
  x: string;

  @ApiProperty()
  telegram: string;

  @ApiProperty()
  salesRatio: number;

  @ApiProperty()
  reservedRatio: number;

  @ApiProperty()
  liquidityRatio: number;

  @ApiProperty()
  launchDate: number;

  @ApiProperty()
  maximumPerUser: number;

  @ApiProperty()
  meta: string;
}
