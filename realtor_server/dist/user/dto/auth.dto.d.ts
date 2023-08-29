import { UserType } from '@prisma/client';
export declare class SignupDto {
    email: string;
    phone: string;
    name: string;
    password: string;
    productKey?: string;
}
export declare class SigninDto {
    email: string;
    password: string;
}
export declare class GenerateProductKeyDto {
    email: string;
    userType: UserType;
}
