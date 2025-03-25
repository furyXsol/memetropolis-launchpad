import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../core/prisma.service';
import { CreateUserOutputDto } from './dto/create-user.output.dto';
import { CreateUserInputDto } from './dto/create-user.input.dto';

@Injectable()
export class NewsletterUserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(input: CreateUserInputDto): Promise<CreateUserOutputDto> {
    await this.prisma.newsletterUser.create({
      data: {
        email: input.email,
      },
    });

    return {
      success: true,
      action: 'CREATE_NEWSLETTER_USER',
      message: 'Created newsletter user',
    };
  }
}
