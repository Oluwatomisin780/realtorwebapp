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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcryptjs");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("../dto/auth.dto");
const client_1 = require("@prisma/client");
const user_decorator_1 = require("../decorators/user.decorator");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    signup(body, userType) {
        if (userType !== client_1.UserType.BUYER) {
            if (!body.productKey) {
                throw new common_1.UnauthorizedException('User not Authorize');
            }
            const validProductKey = `${body.email}-${userType}-${process.env.PRODUCT_SECRET_KEY}`;
            const isProductKeyValid = bcrypt.hash(validProductKey, body.productKey);
            if (!isProductKeyValid)
                throw new common_1.UnauthorizedException();
        }
        return this.authService.signup(body, userType);
    }
    signIn(body) {
        return this.authService.signin(body);
    }
    generateProductKey(body) {
        return this.authService.generateKey(body.email, body.userType);
    }
    whoami(user) {
        return user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('/signup/:userType'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userType', new common_1.ParseEnumPipe(client_1.UserType))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SignupDto, String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signup", null);
__decorate([
    (0, common_1.Post)('/signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SigninDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, common_1.Post)('/key'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.GenerateProductKeyDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "generateProductKey", null);
__decorate([
    (0, common_1.Get)('/whoami'),
    __param(0, (0, user_decorator_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "whoami", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map