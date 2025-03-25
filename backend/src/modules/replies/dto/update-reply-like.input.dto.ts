import { ApiProperty } from '@nestjs/swagger';

export class UpdateReplyLikeInputDto {
  @ApiProperty()
  replyId: string;

  @ApiProperty()
  liked: boolean;
}
