import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInputDto {
  @ApiProperty()
  email: string;
}
