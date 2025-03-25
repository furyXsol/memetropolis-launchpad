import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/create-reply.dto';
import { PrismaService } from '../../core/prisma.service';
import { UpdateReplyLikeInputDto } from './dto/update-reply-like.input.dto';
import { UpdateReplyLikeOutputDto } from './dto/update-reply-like.output.dto';

@Injectable()
export class RepliesService {
  constructor(private prisma: PrismaService) {}

  private containsUrl(text: string): boolean {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/gi;
    return urlRegex.test(text);
  }

  async createReply(address: string, createReplyDto: CreateReplyDto) {
    const { content, threadId } = createReplyDto;

    // Check if content contains URLs
    if (this.containsUrl(content)) {
      throw new BadRequestException('URLs are not allowed in replies');
    }

    const account = await this.prisma.account.findUnique({
      where: {
        address: address.toLowerCase(),
      },
    });

    return this.prisma.reply.create({
      data: {
        content,
        thread: { connect: { id: threadId } },
        account: { connect: { id: account.id } },
      },
    });
  }

  async getRepliesByThread(threadId: string) {
    return this.prisma.reply.findMany({
      where: { thread_id: threadId },
      orderBy: { created_at: 'desc' },
      include: {
        account: true,
        reply_likes: {
          include: {
            account: true,
          },
        },
      },
    });
  }

  async updateReplyLike(
    address: string,
    updateReplyLikeInputDto: UpdateReplyLikeInputDto,
  ): Promise<UpdateReplyLikeOutputDto> {
    const { replyId, liked } = updateReplyLikeInputDto;

    const account = await this.prisma.account.findUnique({
      where: {
        address: address.toLowerCase(),
      },
    });

    let replyLike = await this.prisma.replyLike.findUnique({
      where: {
        reply_id_account_id: {
          reply_id: replyId,
          account_id: account.id,
        },
      },
    });

    if (!replyLike) {
      replyLike = await this.prisma.replyLike.create({
        data: {
          reply_id: replyId,
          account_id: account.id,
          liked,
        },
      });
    } else {
      await this.prisma.replyLike.update({
        where: {
          id: replyLike.id,
        },
        data: {
          liked,
        },
      });
    }

    return {
      success: true,
      action: 'UPDATE_REPLY_LIKES',
      message: 'Updated reply likes',
    };
  }
}
