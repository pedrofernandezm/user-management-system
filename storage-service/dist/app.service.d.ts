import { Cache } from 'cache-manager';
import { CreateUserDto, User } from './definitions';
export declare class AppService {
    private cacheManager;
    constructor(cacheManager: Cache);
    list(): Promise<User[]>;
    create(data: CreateUserDto): Promise<unknown>;
    delete(id: string): Promise<void>;
    private getUsers;
}
