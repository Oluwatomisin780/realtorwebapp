import { ApiProperty } from '@nestjs/swagger';
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
  id: string;
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
  realtor_id: string;
  constructor(partial: Partial<HomeResponseDto>) {
    Object.assign(this, partial);
  }
}
class Image {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;
}
export class CreateResponseDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  address: string;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  numberOfBedrooms: number;
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  numberOfBathrooms: number;
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  price: number;
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  landSize: number;
  @IsEnum(PropertyType)
  @ApiProperty()
  propertyType: PropertyType;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Image)
  @ApiProperty()
  images: Image[];
}

export class updateHomeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  address: string;
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  @IsPositive()
  @ApiProperty()
  numberOfBedrooms: number;
  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty()
  numberOfBathrooms: number;
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  city: string;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  price: number;
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  landSize: number;
  @IsOptional()
  @IsEnum(PropertyType)
  @ApiProperty()
  propertyType: PropertyType;
}

export class InquireDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  message: string;
}
