import { UserType } from '@prisma/client';
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  IsEnum,
  IsOptional,
} from 'class-validator';

export class SignupDto {
  @IsEmail()
  email: string;
  @Matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, {
    message: 'phone  must be valid phone number',
  })
  phone: string;
  @IsString()
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsString()
  @MinLength(5)
  password: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  productKey?: string;
}

export class SigninDto {
  @IsEmail()
  email: string;
  @IsString()
  @MinLength(5)
  password: string;
}

export class GenerateProductKeyDto {
  @IsEmail()
  email: string;
  @IsEnum(UserType)
  userType: UserType;
}
