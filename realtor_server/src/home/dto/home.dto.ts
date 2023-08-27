import { PropertyType } from '@prisma/client';
import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Validate,
  ValidateNested,
  isNumber,
} from 'class-validator';

export class HomeResponseDto {
  id: number;
  address: string;
  @Exclude()
  number_of_bedrooms: number;
  @Expose({ name: 'numberOfBedrooms' })
  numberOfBedrooms() {
    return this.number_of_bedrooms;
  }
  @Exclude()
  number_of_bathrooms: number;
  @Expose({ name: 'numberOfBathrooms' })
  numberOfBathrooms() {
    return this.numberOfBathrooms;
  }
  city: string;
  @Exclude()
  listed_date: Date;
  @Expose({ name: 'listedDate' })
  listedDate() {
    return this.listed_date;
  }
  price: number;
  image: string;
  @Exclude()
  land_size: number;
  @Expose({ name: 'landSize' })
  landSize() {
    return this.land_size;
  }
  propertyType: PropertyType;
  @Exclude()
  createdAt: Date;
  @Exclude()
  updatedAt: Date;
  @Exclude()
  realtor_id: number;
  constructor(partial: Partial<HomeResponseDto>) {
    Object.assign(this, partial);
  }
}
class Image {
  @IsString()
  @IsNotEmpty()
  url: string;
}
export class CreateResponseDto {
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  numberOfBedrooms: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  numberOfBathrooms: number;
  @IsString()
  @IsNotEmpty()
  city: string;
  @IsNumber()
  @IsPositive()
  price: number;
  @IsNumber()
  @IsPositive()
  landSize: number;
  @IsEnum(PropertyType)
  propertyType: PropertyType;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Image)
  images: Image[];
}

export class updateHomeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @IsPositive()
  numberOfBedrooms: number;
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  numberOfBathrooms: number;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  price: number;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  landSize: number;
  @IsOptional()
  @IsEnum(PropertyType)
  propertyType: PropertyType;
}

export class InquireDto {
  @IsString()
  @IsNotEmpty()
  message: string;
}
