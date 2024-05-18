import { Response } from 'express';
import { AppService } from './app.service';
import { CreateUserDto } from './definitions';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    list(res: Response): Promise<void>;
    create(res: Response, data: CreateUserDto): Promise<void>;
    delete(res: Response, params: any): Promise<void>;
}
