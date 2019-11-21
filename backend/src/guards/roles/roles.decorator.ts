import { SetMetadata } from '@nestjs/common';
import { EUserRole } from '../../modules/user/entities/user.entity';

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
