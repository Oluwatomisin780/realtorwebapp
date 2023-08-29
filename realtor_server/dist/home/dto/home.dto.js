"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InquireDto = exports.updateHomeDto = exports.CreateResponseDto = exports.HomeResponseDto = void 0;
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class HomeResponseDto {
    numberOfBedrooms() {
        return this.number_of_bedrooms;
    }
    numberOfBathrooms() {
        return this.numberOfBathrooms;
    }
    listedDate() {
        return this.listed_date;
    }
    landSize() {
        return this.land_size;
    }
    constructor(partial) {
        Object.assign(this, partial);
    }
}
exports.HomeResponseDto = HomeResponseDto;
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], HomeResponseDto.prototype, "number_of_bedrooms", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'numberOfBedrooms' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeResponseDto.prototype, "numberOfBedrooms", null);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], HomeResponseDto.prototype, "number_of_bathrooms", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'numberOfBathrooms' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeResponseDto.prototype, "numberOfBathrooms", null);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], HomeResponseDto.prototype, "listed_date", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'listedDate' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeResponseDto.prototype, "listedDate", null);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], HomeResponseDto.prototype, "land_size", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'landSize' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HomeResponseDto.prototype, "landSize", null);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], HomeResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Date)
], HomeResponseDto.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], HomeResponseDto.prototype, "realtor_id", void 0);
class Image {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], Image.prototype, "url", void 0);
class CreateResponseDto {
}
exports.CreateResponseDto = CreateResponseDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateResponseDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateResponseDto.prototype, "numberOfBedrooms", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateResponseDto.prototype, "numberOfBathrooms", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateResponseDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateResponseDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateResponseDto.prototype, "landSize", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(client_1.PropertyType),
    __metadata("design:type", String)
], CreateResponseDto.prototype, "propertyType", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => Image),
    __metadata("design:type", Array)
], CreateResponseDto.prototype, "images", void 0);
class updateHomeDto {
}
exports.updateHomeDto = updateHomeDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateHomeDto.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], updateHomeDto.prototype, "numberOfBedrooms", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], updateHomeDto.prototype, "numberOfBathrooms", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], updateHomeDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], updateHomeDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], updateHomeDto.prototype, "landSize", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEnum)(client_1.PropertyType),
    __metadata("design:type", String)
], updateHomeDto.prototype, "propertyType", void 0);
class InquireDto {
}
exports.InquireDto = InquireDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], InquireDto.prototype, "message", void 0);
//# sourceMappingURL=home.dto.js.map