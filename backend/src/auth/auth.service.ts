import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

import { UserService } from '../modules/user/user.service';
import { JwtPayload } from './jwt/jwt.payload';
import { Auth } from './entities/auth.entity';
import { User } from '@generated/photon';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
    platform: string,
  ): Promise<Auth> {
    const user: User = await this.userService.user({ email });

    if (!user) {
      throw new BadRequestException('Email or password invalid');
    }

    if (user.role !== platform) {
      throw new BadRequestException(
        "This user can't access this platform.",
        '403',
      );
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new BadRequestException('Email or password invalid');
    }

    return this.createToken(user);
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.userService.user({
      id: payload.userId,
    });
  }

  private async createToken(user: User): Promise<any> {
    const token = await this.jwtService.sign({
      userId: user.id,
    });

    return {
      token,
      user,
    };
  }
}
