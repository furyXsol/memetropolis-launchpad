import { ApiProperty } from '@nestjs/swagger';
import { TraderDto } from './trader.dto';

export class TraderListOutputDto {
  @ApiProperty({ type: TraderDto, isArray: true })
  traders: TraderDto[];
}
