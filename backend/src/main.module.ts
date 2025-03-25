import { Module } from '@nestjs/common';
// import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule, ConfigService } from '@nestjs/config';
// import * as redisStore from 'cache-manager-redis-store';
import { HealthModule } from './modules/health/health.module';
import { PrismaService } from './core/prisma.service';
import { ApolloService } from './core/apollo/apollo.service';
import { TaskService } from './core/task.service';
import { RedisService } from './core/redis.service';
import { ScheduleModule } from '@nestjs/schedule';
import { TokensService } from './core/tokens.service';
import { AccountsService } from './core/accounts.service';
import { SolanaLaunchpadService } from './core/solana.service';
import { SolanaTokenService } from './core/solana_token.service';
import { PriceService } from './core/price.service';
import { TokenModule } from './modules/token/token.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { AuthModule } from './modules/auth/auth.module';
import { AccountModule } from './modules/account/account.module';
import { HttpModule } from './http/http.module';
import { NewsletterUserModule } from './modules/newsletterUser/newsletterUser.module';
import { RepliesModule } from './modules/replies/replies.module';
import { PricesModule } from './modules/prices/prices.module';
import { PricesService } from './modules/prices/prices.service';
import configuration from './config/configuration';

@Module({
  imports: [
    // CacheModule.register({
    //   isGlobal: true,
    //   store: redisStore,
    //   host: process.env.REDIS_HOST,
    //   port: process.env.REDIS_PORT,
    //   username: process.env.REDIS_USER,
    //   password: process.env.REDIS_PASSWORD,
    //   no_ready_check: true,
    // }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
    ScheduleModule.forRoot(),
    HealthModule,
    TokenModule,
    TransactionModule,
    AuthModule,
    AccountModule,
    HttpModule,
    NewsletterUserModule,
    RepliesModule,
    PricesModule,
  ],
  controllers: [],
  providers: [
    ConfigService,
    PrismaService,
    ApolloService,
    TokensService,
    TaskService,
    RedisService,
    AccountsService,
    SolanaLaunchpadService,
    SolanaTokenService,
    PriceService,
    PricesService,
  ],
})
export class MainModule {}
