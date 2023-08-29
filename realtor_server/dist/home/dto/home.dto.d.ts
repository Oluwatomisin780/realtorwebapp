import { PropertyType } from '@prisma/client';
export declare class HomeResponseDto {
    id: number;
    address: string;
    number_of_bedrooms: number;
    numberOfBedrooms(): number;
    number_of_bathrooms: number;
    numberOfBathrooms(): () => any;
    city: string;
    listed_date: Date;
    listedDate(): Date;
    price: number;
    image: string;
    land_size: number;
    landSize(): number;
    propertyType: PropertyType;
    createdAt: Date;
    updatedAt: Date;
    realtor_id: number;
    constructor(partial: Partial<HomeResponseDto>);
}
declare class Image {
    url: string;
}
export declare class CreateResponseDto {
    address: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    city: string;
    price: number;
    landSize: number;
    propertyType: PropertyType;
    images: Image[];
}
export declare class updateHomeDto {
    address: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    city: string;
    price: number;
    landSize: number;
    propertyType: PropertyType;
}
export declare class InquireDto {
    message: string;
}
export {};
