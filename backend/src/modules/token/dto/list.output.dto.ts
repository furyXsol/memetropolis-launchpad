import { ApiProperty } from '@nestjs/swagger';
import { TokenDto } from './token.dto';

export class TokenListOutputDto {
  @ApiProperty({ type: TokenDto, isArray: true })
  tokens: TokenDto[];
}
