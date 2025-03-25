import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../core/prisma.service';
import { JwtStrategy } from './jwt.strategy';
import configuration from '../../config/configuration';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Replace with your own secret key
      signOptions: { expiresIn: '30d' }, // Token expiration time
    }),
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  providers: [AuthService, PrismaService, ConfigService, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtModule, JwtStrategy],
})
export class AuthModule {}
