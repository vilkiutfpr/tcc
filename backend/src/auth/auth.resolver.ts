import { Resolver, Mutation, Args, Query, Context } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { User } from '../modules/user/entities/user.entity';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../guards';

@Resolver('Auth')
export class AuthResolver {
  public constructor(private readonly authService: AuthService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  public async me(@Context() context) {
    return context.req.user;
  }

  @Mutation(() => Auth)
  public async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('platform') platform: 'BC' | 'BM' | 'ADM',
  ): Promise<Auth> {
    const result = await this.authService.signIn(email, password, platform);
    return await result;
  }
}
