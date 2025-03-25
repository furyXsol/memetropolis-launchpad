import { ApiProperty } from '@nestjs/swagger';

export class UpdateReplyLikeOutputDto {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  action: string;

  @ApiProperty()
  message: string;
}
