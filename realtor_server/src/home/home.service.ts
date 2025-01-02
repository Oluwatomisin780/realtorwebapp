import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HomeResponseDto } from './dto/home.dto';
import { PropertyType, UserType } from '@prisma/client';
import { UserInterface } from 'src/user/decorators/user.decorator';

interface GetHomeParams {
  city?: string;
  price: {
    gte?: number;
    lte?: number;
  };
  propertyType?: PropertyType;
}
interface createHomeParams {
  address: string;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  city: string;
  price: number;
  landSize: number;
  propertyType: PropertyType;
  images: { url: string }[];
}

interface updatedHomeParams {
  address?: string;
  numberOfBedrooms?: number;
  numberOfBathrooms?: number;
  city?: string;
  price?: number;
  landSize?: number;
  propertyType?: PropertyType;
}
@Injectable()
export class HomeService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllHome(filter: GetHomeParams): Promise<HomeResponseDto[]> {
    const homes = await this.prismaService.home.findMany({
      select: {
        id: true,
        address: true,
        city: true,
        price: true,
        propertyType: true,
        number_of_bathrooms: true,
        number_of_bedrooms: true,
        images: {
          select: {
            url: true,
          },
          take: 1,
        },
      },
      where: filter,
    });
    if (!homes.length) throw new NotFoundException();
    return homes.map((home) => {
      const fetchHome = { ...home, image: home.images[0].url };
      delete fetchHome.images;
      return new HomeResponseDto(fetchHome);
    });
  }
  async getAllHomes() {
    const homes = await this.prismaService.home.findMany();
    return homes;
  }
  async getHomeById(id: string) {
    const home = await this.prismaService.home.findUnique({
      where: {
        id: id,
      },
    });
    if (!home) return new NotFoundException();
    return new HomeResponseDto(home);
  }
  async createHome(
    {
      address,
      numberOfBathrooms,
      numberOfBedrooms,
      city,
      price,
      landSize,
      propertyType,
      images,
    }: createHomeParams,
    userId: string,
  ) {
    const home = await this.prismaService.home.create({
      data: {
        address: address,
        number_of_bathrooms: numberOfBathrooms,
        number_of_bedrooms: numberOfBedrooms,
        city: city,
        land_size: landSize,
        price: price,
        propertyType,
        realtor_id: userId,
      },
    });
    const homeImages = images.map((image) => {
      return { ...image, home_id: home.id };
    });
    await this.prismaService.image.createMany({ data: homeImages });
    return new HomeResponseDto(home);
  }
  async updateHome(body: updatedHomeParams, id: string) {
    const home = await this.prismaService.home.findUnique({ where: { id } });
    if (!home) throw new NotFoundException();
    const updateHome = await this.prismaService.home.update({
      where: {
        id,
      },
      data: body,
    });
    return new HomeResponseDto(updateHome);
  }
  async deleteHome(id: string) {
    const home = await this.prismaService.home.findUnique({
      where: {
        id,
      },
    });
    if (!home) throw new NotFoundException(id);
    await this.prismaService.image.deleteMany({
      where: {
        home_id: id,
      },
    });
    const deleteHome = await this.prismaService.home.delete({
      where: {
        id,
      },
    });
    return { id: deleteHome.id };
  }
  async getRealtorByHomeId(id: string) {
    const home = await this.prismaService.home.findUnique({
      where: {
        id,
      },
      select: {
        realtor: {
          select: {
            name: true,
            id: true,
            phone: true,
            email: true,
          },
        },
      },
    });
    if (!home) {
      throw new NotFoundException('home does not exist');
    }
    return home.realtor;
  }
  async inquireHome(buyer: UserInterface, homeId, message) {
    const realtor = await this.getRealtorByHomeId(homeId);
    //if (!realtor) throw new NotFoundException('home does not exist');
    return this.prismaService.message.create({
      data: {
        realtor_id: realtor.id,
        buyer_id: buyer.id,
        home_id: homeId,
        message,
      },
    });
  }
  async getHomeMessage(homeId: string) {
    return this.prismaService.message.findMany({
      where: {
        home_id: homeId,
      },
      select: {
        message: true,
        buyer: {
          select: {
            name: true,
            phone: true,
            email: true,
          },
        },
      },
    });
  }
}
