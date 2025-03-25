import { ApiProperty } from '@nestjs/swagger';
import { RecentTokenDto } from './recentToken.dto';

export class RecentTokenListOutputDto {
  @ApiProperty({ type: RecentTokenDto, isArray: true })
  recentTokens: RecentTokenDto[];
}
