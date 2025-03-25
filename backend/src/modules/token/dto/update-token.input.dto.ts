import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateTokenInputDto {
  @ApiProperty()
  chainId: string;

  @ApiProperty()
  tokenAddress: string;

  @ApiProperty()
  facebook: string;

  @ApiProperty()
  x: string;

  @ApiProperty()
  linkedin: string;

  @ApiPropertyOptional()
  banner?: string;

  @ApiPropertyOptional()
  description?: string;
}
