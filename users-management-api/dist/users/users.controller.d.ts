import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(res: Response, createUserDto: CreateUserDto): Promise<void>;
    list(res: Response): Promise<void>;
    remove(id: string, res: Response): Promise<void>;
}
