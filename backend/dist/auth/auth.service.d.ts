import { JwtService } from '@nestjs/jwt';
import { UserService } from '../modules/user/user.service';
import { JwtPayload } from './jwt/jwt.payload';
import { Auth } from './entities/auth.entity';
import { User } from '@generated/photon';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    signIn(email: string, password: string, platform: string): Promise<Auth>;
    validateUser(payload: JwtPayload): Promise<User>;
    private createToken;
}
