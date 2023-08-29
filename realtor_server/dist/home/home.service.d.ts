import { NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HomeResponseDto } from './dto/home.dto';
import { PropertyType } from '@prisma/client';
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
    images: {
        url: string;
    }[];
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
export declare class HomeService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getAllHome(filter: GetHomeParams): Promise<HomeResponseDto[]>;
    getHomeById(id: number): Promise<NotFoundException | HomeResponseDto>;
    createHome({ address, numberOfBathrooms, numberOfBedrooms, city, price, landSize, propertyType, images, }: createHomeParams, userId: number): Promise<HomeResponseDto>;
    updateHome(body: updatedHomeParams, id: number): Promise<HomeResponseDto>;
    deleteHome(id: number): Promise<{
        id: number;
    }>;
    getRealtorByHomeId(id: number): Promise<{
        email: string;
        name: string;
        phone: string;
        id: number;
    }>;
    inquireHome(buyer: UserInterface, homeId: any, message: any): Promise<{
        id: number;
        message: string;
        home_id: number;
        realtor_id: number;
        buyer_id: number;
    }>;
    getHomeMessage(homeId: number): Promise<{
        message: string;
        buyer: {
            email: string;
            name: string;
            phone: string;
        };
    }[]>;
}
export {};
