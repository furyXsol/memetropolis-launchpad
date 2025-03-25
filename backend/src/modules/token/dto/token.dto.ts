import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  chainId: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  banner: string;

  @ApiProperty()
  symbol: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  decimals: number;

  @ApiProperty()
  currentHolderCount: string;

  @ApiProperty()
  transferCount: string;

  @ApiProperty()
  mintCount: string;

  @ApiProperty()
  burnCount: string;

  @ApiProperty()
  totalSupply: string;

  @ApiProperty()
  socials: string;

  @ApiProperty()
  creationTimestamp: number;

  @ApiProperty()
  priceInDecimal: string;

  @ApiProperty()
  tokenSold: string;

  @ApiProperty()
  isFundingFinished: boolean;

  @ApiProperty()
  marketcap: string;

  @ApiProperty()
  owner: string;

  @ApiProperty()
  ownerName: string;

  @ApiProperty()
  ownerImage: string;

  @ApiProperty()
  ownerSocial: string;

  @ApiProperty()
  meta: string;

  @ApiProperty()
  volume: string;
}
