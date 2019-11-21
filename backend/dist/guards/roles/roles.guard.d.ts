import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserService } from '../../modules/user/user.service';
export declare class RolesGuard implements CanActivate {
    private readonly reflector;
    private userService;
    constructor(reflector: Reflector, userService: UserService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
