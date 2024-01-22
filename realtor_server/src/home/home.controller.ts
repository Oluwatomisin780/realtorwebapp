import {
  Controller,
  Query,
  Delete,
  Get,
  Patch,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { User, UserInterface } from 'src/user/decorators/user.decorator';
import { HomeService } from './home.service';
import {
  CreateResponseDto,
  HomeResponseDto,
  InquireDto,
  updateHomeDto,
} from './dto/home.dto';
import { PropertyType, UserType } from '@prisma/client';
import { AuthGuard } from './guard/auth.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { userInfo } from 'os';
@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}
  @Get()
  getAllHome(
    @Query('city') city?: string,
    @Query('minPrice') minPrice?: string,
    @Query('maxPrice') maxPrice?: string,
    @Query('propertyType') propertyType?: PropertyType,
  ): Promise<HomeResponseDto[]> {
    const price =
      minPrice || maxPrice
        ? {
            ...(minPrice && {
              gte: parseFloat(minPrice),
            }),
            ...(maxPrice && {
              lte: parseInt(maxPrice),
            }),
          }
        : undefined;
    const filter = {
      ...(city && { city }),
      ...(price && { price }),
      ...(propertyType && { propertyType }),
    };
    return this.homeService.getAllHome(filter);
  }
  //get all  home
  @Get('/all')
  getAllHomes() {
    return this.homeService.getAllHomes();
  }

  @Get(':id')
  getHomeById(@Param('id') id: string) {
    return this.homeService.getHomeById(parseInt(id));
  }
  @Roles(UserType.REALTOR)
  @Post()
  createHome(@Body() body: CreateResponseDto, @User() user: UserInterface) {
    return this.homeService.createHome(body, user.id);
  }
  @Roles(UserType.REALTOR)
  @Patch(':id')
  async updateHome(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: updateHomeDto,
    @User() user: UserInterface,
  ) {
    const realtor = await this.homeService.getRealtorByHomeId(id);
    if (realtor.id !== user.id) throw new UnauthorizedException();
    return this.homeService.updateHome(body, id);
  }
  @Roles(UserType.REALTOR)
  @Delete(':id')
  async deleteHome(
    @Param('id', ParseIntPipe) id: number,
    @User() user: UserInterface,
  ) {
    const realtor = await this.homeService.getRealtorByHomeId(id);
    if (realtor.id !== user.id) throw new UnauthorizedException();
    return this.homeService.deleteHome(id);
  }
  @Roles(UserType.BUYER)
  @Post('/:id/inquire')
  inquryHome(
    @Param('id', ParseIntPipe) homeId: number,
    @User() userData: UserInterface,
    @Body() { message }: InquireDto,
  ) {
    return this.homeService.inquireHome(userData, homeId, message);
  }
  @Roles(UserType.REALTOR)
  @Get('/:id/messages')
  async getHomeMessage(
    @Param('id', ParseIntPipe) homeId: number,
    @User() userData: UserInterface,
  ) {
    const realtor = await this.homeService.getRealtorByHomeId(homeId);
    if (realtor.id !== userData.id)
      throw new UnauthorizedException('user not authorize');
    return this.homeService.getHomeMessage(homeId);
  }
}

//vim loading soon
//todo: complete this course //take break while learning vim// setupvim vscode //join the project together // finally leanrn nextjs /react+ typescript// learn how join nextjs graphql nestjs prisma docker redis together //payment integration//// start building up my portfolio  // start applying for jobs
