import { ApiProperty } from '@nestjs/swagger';

export class UpdateTokenOutputDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;
}
