import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  email: string;
  @Matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/, {
    message: 'phone  must be valid phone number',
  })
  @ApiProperty()
  phone: string;
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'name is required' })
  name: string;

  @IsString()
  @MinLength(5)
  @ApiProperty()
  password: string;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  productKey?: string;
}

export class SigninDto {
  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsString()
  @MinLength(5)
  password: string;
}

export class GenerateProductKeyDto {
  @IsEmail()
  @ApiProperty()
  email: string;
  @ApiProperty()
  @IsEnum(UserType)
  userType: UserType;
}
