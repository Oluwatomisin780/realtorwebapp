import { UserInterface } from 'src/user/decorators/user.decorator';
import { HomeService } from './home.service';
import { CreateResponseDto, HomeResponseDto, InquireDto, updateHomeDto } from './dto/home.dto';
import { PropertyType } from '@prisma/client';
export declare class HomeController {
    private readonly homeService;
    constructor(homeService: HomeService);
    getAllHome(city?: string, minPrice?: string, maxPrice?: string, propertyType?: PropertyType): Promise<HomeResponseDto[]>;
    getHomeById(id: string): Promise<import("@nestjs/common").NotFoundException | HomeResponseDto>;
    createHome(body: CreateResponseDto, user: UserInterface): Promise<HomeResponseDto>;
    updateHome(id: number, body: updateHomeDto, user: UserInterface): Promise<HomeResponseDto>;
    deleteHome(id: number, user: UserInterface): Promise<{
        id: number;
    }>;
    inquryHome(homeId: number, userData: UserInterface, { message }: InquireDto): Promise<{
        id: number;
        message: string;
        home_id: number;
        realtor_id: number;
        buyer_id: number;
    }>;
    getHomeMessage(homeId: number, userData: UserInterface): Promise<{
        message: string;
        buyer: {
            email: string;
            name: string;
            phone: string;
        };
    }[]>;
}
