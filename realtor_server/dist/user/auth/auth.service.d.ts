import { PrismaService } from 'src/prisma/prisma.service';
import { UserType } from '@prisma/client';
interface SignupParams {
    email: string;
    name: string;
    phone: string;
    password: string;
}
interface SigninParams {
    email: string;
    password: string;
}
export declare class AuthService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    signup({ email, password, name, phone }: SignupParams, userType: UserType): Promise<{
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
    signin({ email, password }: SigninParams): Promise<{
        id: number;
        email: string;
        token: string;
    }>;
    generateKey(email: string, userType: UserType): Promise<string>;
}
export {};
