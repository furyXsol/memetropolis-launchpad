import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { PrismaService } from '../../core/prisma.service';
import { PriceService } from '../../core/price.service';
import { HttpModule } from '@nestjs/axios';
import { RedisService } from 'src/core/redis.service';

@Module({
  imports: [HttpModule],
  providers: [AccountService, PrismaService, PriceService, RedisService],
  controllers: [AccountController],
})
export class AccountModule {}
