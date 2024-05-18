import { CreateUserDto } from './dto/create-user.dto';
import { HttpService } from '@nestjs/axios';
export declare class UsersService {
    private readonly httpService;
    private readonly logger;
    private readonly storageHost;
    constructor(httpService: HttpService);
    create(createUserDto: CreateUserDto): Promise<any>;
    list(): Promise<any>;
    delete(id: string): Promise<any>;
}
