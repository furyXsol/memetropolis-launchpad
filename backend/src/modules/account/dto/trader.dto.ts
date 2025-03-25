import { ApiProperty } from '@nestjs/swagger';

export class TraderDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  volumeTotal: string;

  @ApiProperty()
  volumeAveragePerTrade: string;

  @ApiProperty()
  tradesPerWeek: number;
}
