import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileInputDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  image: string;

  @ApiProperty()
  facebook: string;

  @ApiProperty()
  x: string;

  @ApiProperty()
  linkedin: string;
}
