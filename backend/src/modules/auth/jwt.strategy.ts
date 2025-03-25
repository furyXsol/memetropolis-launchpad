import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { AuthService } from './auth.service';
import { AccountDto } from '../account/dto';

interface JwtConfig {
  JWT_SECRET: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private auth: AuthService,
    private readonly config: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<JwtConfig>('jwt').JWT_SECRET,
    });
  }

  async validate(payload: any): Promise<AccountDto> {
    const userId = payload.userId;
    const user = await this.auth.validateUser(userId);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
