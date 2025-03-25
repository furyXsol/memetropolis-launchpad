import { Controller, Post, Get, Body, Param, UseGuards } from '@nestjs/common';
import { RepliesService } from './replies.service';
import { CreateReplyDto } from './dto/create-reply.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { AuthWalletAddress } from '../auth/auth.decorator';
import { UpdateReplyLikeOutputDto } from './dto/update-reply-like.output.dto';
import { UpdateReplyLikeInputDto } from './dto/update-reply-like.input.dto';

@ApiTags('Replies')
@Controller('replies')
export class RepliesController {
  constructor(private readonly repliesService: RepliesService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  async createReply(
    @AuthWalletAddress() address: string,
    @Body() createReplyDto: CreateReplyDto,
  ) {
    return this.repliesService.createReply(address, createReplyDto);
  }

  @Get(':threadId')
  async getRepliesByThread(@Param('threadId') threadId: string) {
    return this.repliesService.getRepliesByThread(threadId);
  }

  @Post('/like')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  async updateReplyLike(
    @AuthWalletAddress() address: string,
    @Body() updateReplyLikeInputDto: UpdateReplyLikeInputDto,
  ): Promise<UpdateReplyLikeOutputDto> {
    return this.repliesService.updateReplyLike(
      address,
      updateReplyLikeInputDto,
    );
  }
}
