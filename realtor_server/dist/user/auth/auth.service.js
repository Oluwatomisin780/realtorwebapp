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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
let AuthService = class AuthService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async signup({ email, password, name, phone }, userType) {
        const userExist = await this.prismaService.user.findUnique({
            where: {
                email,
            },
        });
        if (userExist)
            throw new common_1.BadRequestException('user already exist');
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
        const token = jwt.sign({
            name,
            id: user.id,
        }, process.env.JSON_SECRET, { expiresIn: 360000 });
        return { user, token };
    }
    async signin({ email, password }) {
        const checkEmail = await this.prismaService.user.findUnique({
            where: {
                email,
            },
        });
        if (!checkEmail)
            throw new common_1.NotFoundException('Email does not exist');
        const checkPassword = await bcrypt.compare(password, checkEmail.password);
        if (!checkPassword)
            throw new common_1.BadRequestException(' Incorrect password,Please check');
        const token = jwt.sign({
            id: checkEmail.id,
        }, process.env.JSON_SECRET, { expiresIn: 360000 });
        return {
            id: checkEmail.id,
            email: checkEmail.email,
            token: token,
        };
    }
    async generateKey(email, userType) {
        const string = `${email}-${userType}-${process.env.PRODUCT_SECRET_KEY}`;
        return bcrypt.hash(string, 12);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map