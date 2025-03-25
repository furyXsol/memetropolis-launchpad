import { Module } from '@nestjs/common';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';
import { PrismaService } from '../../core/prisma.service';
import { HttpModule } from '@nestjs/axios';
import { RedisService } from '../../core/redis.service';

@Module({
  imports: [HttpModule],
  providers: [PricesService, PrismaService, RedisService],
  controllers: [PricesController],
})
export class PricesModule {}
