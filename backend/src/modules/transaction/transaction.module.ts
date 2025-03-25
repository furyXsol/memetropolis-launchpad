import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { PrismaService } from '../../core/prisma.service';
import { PriceService } from '../../core/price.service';
import { RedisService } from '../../core/redis.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [TransactionService, PrismaService, PriceService, RedisService],
  controllers: [TransactionController],
})
export class TransactionModule {}
