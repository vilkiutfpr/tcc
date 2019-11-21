import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UseGuards,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { GqlAuthGuard } from '../../guards';
import { UserService } from '../../modules/user/user.service';

@Injectable()
@UseGuards(GqlAuthGuard)
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private userService: UserService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    const ctx = GqlExecutionContext.create(context);

    if (!roles) {
      return true;
    }

    const {
      req: { user: userContext },
    } = ctx.getContext();

    const user = await this.userService.user({ id: userContext.id });

    const hasRole = () => roles.includes(user.role);

    return user && user.role && hasRole();
  }
}
