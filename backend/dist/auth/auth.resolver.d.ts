import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    me(context: any): Promise<any>;
    signIn(email: string, password: string, platform: 'BC' | 'BM' | 'ADM'): Promise<Auth>;
}
