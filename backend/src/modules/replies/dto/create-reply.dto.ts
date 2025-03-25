import { ApiProperty } from '@nestjs/swagger';

export class CreateReplyDto {
  @ApiProperty()
  content: string;

  @ApiProperty()
  threadId: string;
}
