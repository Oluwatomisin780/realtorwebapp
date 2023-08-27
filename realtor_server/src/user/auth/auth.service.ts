import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserType } from '@prisma/client';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
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
@Injectable()
export class AuthService {
  constructor(private readonly prismaService: PrismaService) {}
  async signup(
    { email, password, name, phone }: SignupParams,
    userType: UserType,
  ) {
    const userExist = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (userExist) throw new BadRequestException('user already exist');
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.prismaService.user.create({
      data: {
        name,
        phone,
        email,
        password: hashedPassword,
        user_type: userType,
      },
    });
    const token = jwt.sign(
      {
        name,
        id: user.id,
      },
      process.env.JSON_SECRET,
      { expiresIn: 360000 },
    );
    return { user, token };
  }

  async signin({ email, password }: SigninParams) {
    const checkEmail = await this.prismaService.user.findUnique({
      where: {
        email,
      },
    });
    if (!checkEmail) throw new NotFoundException('Email does not exist');

    const checkPassword = await bcrypt.compare(password, checkEmail.password);
    if (!checkPassword)
      throw new BadRequestException(' Incorrect password,Please check');
    const token = jwt.sign(
      {
        id: checkEmail.id,
      },
      process.env.JSON_SECRET,
      { expiresIn: 360000 },
    );
    return {
      id: checkEmail.id,
      email: checkEmail.email,
      token: token,
    };
  }
  async generateKey(email: string, userType: UserType) {
    const string = `${email}-${userType}-${process.env.PRODUCT_SECRET_KEY}`;
    return bcrypt.hash(string, 12);
  }
}
