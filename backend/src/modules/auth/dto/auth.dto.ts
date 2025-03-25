import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty()
  address: string;

  @ApiProperty()
  signature: string;

  @ApiProperty()
  rawMessage: string;
}
