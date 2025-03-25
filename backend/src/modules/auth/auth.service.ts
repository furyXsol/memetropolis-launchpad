import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';
import { base58, isAddress as isEvmAddress } from 'ethers/lib/utils';
import * as nacl from 'tweetnacl';
import { PrismaService } from '../../core/prisma.service';
import { AccountDto } from '../account/dto';
import { UpdateProfileInputDto, UpdateProfileOutputDto } from './dto';
import { generateRandomString } from '../../core/lib/utils';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async validateUser(address: string): Promise<AccountDto> {
    const account = await this.prisma.account.findUnique({
      where: {
        address: address.toLowerCase(),
      },
    });
    if (!account) {
      throw new NotAcceptableException('could not find the user');
    }

    return account;
  }

  async updateProfile(
    address: string,
    input: UpdateProfileInputDto,
  ): Promise<UpdateProfileOutputDto> {
    const socials = {
      facebook: input.facebook,
      x: input.x,
      linkedin: input.linkedin,
    };

    await this.prisma.account.update({
      where: {
        address: address.toLowerCase(),
      },
      data: {
        name: input.name,
        bio: input.bio,
        image: input.image,
        socials,
      },
    });

    return {
      success: true,
      message: 'Updated profile',
    };
  }

  async auth(address: string, signature: string, rawMessage: string) {
    if (!this.verifySignedMessage(rawMessage, signature, address)) {
      throw new UnauthorizedException('Invalid signature');
    }

    const payload = { address, signature };

    const account = await this.prisma.account.findUnique({
      where: {
        address: isEvmAddress(address) ? address.toLowerCase() : address,
      },
    });
    if (!account) {
      const name = generateRandomString(10);
      await this.prisma.account.create({
        data: {
          address: isEvmAddress(address) ? address.toLowerCase() : address,
          name,
        },
      });
    }

    const token = await this.jwt.signAsync(payload);
    const data = await this.jwt.decode(token);
    return { token, exp: data.exp };
  }

  public verifySignedMessage(
    rawMessage: string,
    signedMessage: string,
    walletAddress: string,
  ): boolean {
    try {
      if (isEvmAddress(walletAddress)) {
        const recoveredAddress = ethers.utils.verifyMessage(
          rawMessage,
          signedMessage,
        );
        if (recoveredAddress.toLowerCase() === walletAddress.toLowerCase()) {
          return true;
        }
        return false;
      }

      const validSolanaSignature = nacl.sign.detached.verify(
        new TextEncoder().encode(rawMessage),
        base58.decode(signedMessage),
        base58.decode(walletAddress),
      );

      if (validSolanaSignature) {
        return true;
      }

      return false;
    } catch (e) {
      return false;
    }
  }

  async refreshToken(token: string) {
    const payload = await this.jwt.verifyAsync(token, {
      secret: process.env.JWT_SECRET as string,
    });
    const newToken = await this.jwt.signAsync(payload);

    const data = await this.jwt.decode(token);

    return { newToken, exp: data.exp };
  }

  async assignAlphaTesterId(
    address: string,
  ): Promise<{ success: boolean; message: string }> {
    const account = await this.prisma.account.findUnique({
      where: {
        address: address.toLowerCase(),
      },
    });

    if (!account) {
      throw new NotAcceptableException('User not found');
    }

    // Generate a unique AlphaTester ID
    const alphaTesterId = `ALPHA-${account.id}`;

    await this.prisma.account.update({
      where: {
        address: address.toLowerCase(),
      },
      data: {
        alpha_tester_id: alphaTesterId,
      },
    });

    return {
      success: true,
      message: `AlphaTester ID assigned: ${alphaTesterId}`,
    };
  }
}
