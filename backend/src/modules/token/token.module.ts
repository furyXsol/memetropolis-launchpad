import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TokenController } from './token.controller';
import { PrismaService } from '../../core/prisma.service';
import { PriceService } from '../../core/price.service';
import { HttpModule } from '@nestjs/axios';
import { RedisService } from '../../core/redis.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [HttpModule, JwtModule],
  providers: [TokenService, PrismaService, PriceService, RedisService],
  controllers: [TokenController],
})
export class TokenModule {}
