import { ApiProperty } from '@nestjs/swagger';

export class SetChatPinnedOutputDto {
  @ApiProperty({
    description: 'Success status',
    example: true,
  })
  success: boolean;

  @ApiProperty({
    description: 'Token ID',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  tokenId: string;

  @ApiProperty({
    description: 'Pinned status',
    example: true,
  })
  isPinned: boolean;
}
