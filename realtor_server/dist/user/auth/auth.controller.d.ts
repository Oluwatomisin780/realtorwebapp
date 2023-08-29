import { AuthService } from './auth.service';
import { SigninDto, SignupDto, GenerateProductKeyDto } from '../dto/auth.dto';
import { UserType } from '@prisma/client';
import { UserInterface } from '../decorators/user.decorator';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: SignupDto, userType: UserType): Promise<{
        user: {
            id: number;
            name: string;
            phone: string;
            email: string;
            password: string;
            created_at: Date;
            updated_at: Date;
            user_type: import(".prisma/client").$Enums.UserType;
        };
        token: string;
    }>;
    signIn(body: SigninDto): Promise<{
        id: number;
        email: string;
        token: string;
    }>;
    generateProductKey(body: GenerateProductKeyDto): Promise<string>;
    whoami(user: UserInterface): UserInterface;
}
