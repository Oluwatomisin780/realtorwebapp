import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  ParseEnumPipe,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthService } from './auth.service';
import { SigninDto, SignupDto, GenerateProductKeyDto } from '../dto/auth.dto';
import { UserType } from '@prisma/client';
import { User, UserInterface } from '../decorators/user.decorator';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup/:userType')
  signup(
    @Body() body: SignupDto,
    @Param('userType', new ParseEnumPipe(UserType)) userType: UserType,
  ) {
    if (userType !== UserType.BUYER) {
      if (!body.productKey) {
        throw new UnauthorizedException('User not Authorize');
      }
      const validProductKey = `${body.email}-${userType}-${process.env.PRODUCT_SECRET_KEY}`;
      const isProductKeyValid = bcrypt.hash(validProductKey, body.productKey);
      if (!isProductKeyValid) throw new UnauthorizedException();
    }
    return this.authService.signup(body, userType);
  }
  @Post('/signin')
  signIn(@Body() body: SigninDto) {
    return this.authService.signin(body);
  }
  @Post('/key')
  generateProductKey(@Body() body: GenerateProductKeyDto) {
    return this.authService.generateKey(body.email, body.userType);
  }
  @Get('/whoami')
  whoami(@User() user: UserInterface) {
    return user;
  }
}
