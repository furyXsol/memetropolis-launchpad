import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TokenService } from './token.service';
import { TokenListOutputDto } from './dto/list.output.dto';
import { TokenDto } from './dto/token.dto';
import { UpdateTokenInputDto } from './dto/update-token.input.dto';
import { UpdateTokenOutputDto } from './dto/update-token.output.dto';
import { TokenTradeInfoDto } from './dto/token-trade-info.dto';
import { CreateTokenInputDto } from './dto/create-token.input.dto';
import { AuthGuard } from '../auth/auth.guard';
import { SetChatPinnedInputDto } from './dto/set-chat-pinned.input.dto';
import { SetChatPinnedOutputDto } from './dto/set-chat-pinned.output.dto';

@ApiTags('Token')
@Controller('token')
export class TokenController {
  constructor(private readonly service: TokenService) {}

  @Get('list')
  @ApiOperation({
    summary: 'Get token list',
  })
  @ApiQuery({
    name: 'chainId',
    type: String,
    required: false,
    description: 'chainId',
  })
  @ApiQuery({
    name: 'meta',
    type: String,
    required: false,
    description: 'meta',
  })
  @ApiQuery({
    name: 'bondingStatus',
    type: String,
    required: false,
    description: 'bonded or unbonded',
  })
  @ApiQuery({
    name: 'sortBy',
    type: String,
    required: false,
    description: 'sort by',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns token list',
    type: TokenListOutputDto,
  })
  async getTokenList(
    @Query('chainId') chainId: string,
    @Query('meta') meta: string,
    @Query('bondingStatus') bondingStatus: string,
    @Query('sortBy') sortBy: string,
  ): Promise<TokenListOutputDto> {
    return this.service.getTokenList(chainId, meta, bondingStatus, sortBy);
  }

  @Get('/top-marketcap-list')
  @ApiOperation({
    summary: 'Get token list',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns token list',
    type: TokenListOutputDto,
  })
  @ApiQuery({
    name: 'limit',
    type: Number,
    required: true,
    description: 'limit',
  })
  async getTopMarketcapTokenList(
    @Query('limit') limit: number,
  ): Promise<TokenListOutputDto> {
    return this.service.getTopMarketcapTokenList(limit);
  }

  @Get('list/:category')
  @ApiOperation({
    summary: 'Get token list by category',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns token list by category',
    type: TokenListOutputDto,
  })
  @ApiParam({
    name: 'category',
    required: true,
    type: String,
    description: 'hot | new | top | chain',
  })
  async getTokenListByCategory(
    @Param('category') category: string, // hot | new | top | chain
  ): Promise<TokenListOutputDto> {
    return this.service.getTokenListByCategory(category);
  }

  @Get('/:chainId/:address')
  @ApiOperation({
    summary: 'Get token detail',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns token detail',
    type: TokenDto,
  })
  async getToken(
    @Param('chainId') chainId: string,
    @Param('address') address: string,
  ): Promise<TokenDto> {
    return this.service.getToken(chainId, address);
  }

  @Get('/trade-info/:chainId/:address')
  @ApiOperation({
    summary: 'Get token trade info',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns token trade info',
    type: TokenTradeInfoDto,
  })
  async getTokenTradeInfo(
    @Param('chainId') chainId: string,
    @Param('address') address: string,
  ): Promise<TokenTradeInfoDto> {
    return this.service.getTokenTradeInfo(chainId, address);
  }

  @Post('/create')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Create token information',
  })
  @ApiResponse({
    status: 200,
    type: UpdateTokenOutputDto,
    description: 'Create token information',
  })
  async create(
    @Body() input: CreateTokenInputDto,
  ): Promise<UpdateTokenOutputDto> {
    return this.service.create(input);
  }

  @Post('/update')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  @ApiOperation({
    summary: 'Update token information',
  })
  @ApiResponse({
    status: 200,
    type: UpdateTokenOutputDto,
    description: 'Updated token information',
  })
  async update(
    @Body() input: UpdateTokenInputDto,
  ): Promise<UpdateTokenOutputDto> {
    return this.service.update(input);
  }

  @Post('/pin-chat')
  @ApiOperation({
    summary: 'Update token information',
  })
  @ApiResponse({
    status: 200,
    type: SetChatPinnedOutputDto,
    description: 'Set chat pinned',
  })
  async setChatPinned(
    @Body() input: SetChatPinnedInputDto,
  ): Promise<SetChatPinnedOutputDto> {
    return this.service.setChatPinned(input);
  }

  @Get('/pinned-chats')
  @ApiOperation({
    summary: 'Get all pinned token chats',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns list of pinned token chats',
    type: TokenListOutputDto,
  })
  async getPinnedTokens(): Promise<TokenListOutputDto> {
    return this.service.getPinnedTokens();
  }
}
