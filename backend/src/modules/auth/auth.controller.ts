import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  Param,
  UnauthorizedException,
} from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { AuthWalletAddress } from './auth.decorator';
import { AccountDto } from '../account/dto';
import { AuthDto, UpdateProfileOutputDto, UpdateProfileInputDto } from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/login')
  async login(@Body() authDto: AuthDto) {
    const { address, signature, rawMessage } = authDto;

    try {
      const { token, exp } = await this.service.auth(
        address,
        signature,
        rawMessage,
      );
      return { ok: true, data: { token, exp } };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Post('/refresh')
  async refreshToken(@Req() { headers }: any) {
    const token = headers.authorization;
    const { newToken, exp } = await this.service.refreshToken(token);

    return { ok: true, data: { token: newToken, exp } };
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  @ApiBearerAuth('JWT-auth')
  async me(@AuthWalletAddress() address: string): Promise<AccountDto> {
    return await this.service.validateUser(address);
  }

  @Get('/profile/:address')
  async profile(@Param('address') address: string): Promise<AccountDto> {
    return await this.service.validateUser(address);
  }

  @Post('/update')
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: 200,
    type: UpdateProfileOutputDto,
    description: 'Update profile with signature',
  })
  @ApiBearerAuth('JWT-auth')
  async updateProfile(
    @AuthWalletAddress() address: string,
    @Body() input: UpdateProfileInputDto,
  ): Promise<UpdateProfileOutputDto> {
    return this.service.updateProfile(address, input);
  }
}
