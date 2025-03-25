import { Module } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { NewsletterUserService } from './newsletterUser.service';
import { NewsletterUserController } from './newsletterUser.controller';

@Module({
  imports: [],
  providers: [NewsletterUserService, PrismaService],
  controllers: [NewsletterUserController],
})
export class NewsletterUserModule {}
