import { ApiProperty } from '@nestjs/swagger';

export class CreateUserOutputDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  action: string;

  @ApiProperty()
  message: string;
}
