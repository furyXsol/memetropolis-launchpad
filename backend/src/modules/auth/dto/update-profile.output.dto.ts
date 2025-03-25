import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileOutputDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  message: string;
}
