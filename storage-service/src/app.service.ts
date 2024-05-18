import { Injectable, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';
import { CreateUserDto, User } from './definitions';
import { ulid } from 'ulid';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async list(): Promise<User[]> {
    return await this.getUsers();
  }

  async create(data: CreateUserDto) {
    const users: User[] = await this.getUsers();
    const id = ulid();
    const user = { id, ...data };
    await this.cacheManager.set('users', users.concat(user), 0);
    return await this.cacheManager.get('users');
  }

  async delete(id: string) {
    const users: User[] = await this.getUsers();
    const index = users.findIndex((user) => user.id === id);
    const filtered = Array.from(users);
    filtered.splice(index, 1);
    await this.cacheManager.set('users', filtered, 0);
  }

  private async getUsers(): Promise<User[]> {
    return (await this.cacheManager.get<User[]>('users')) || [];
  }
}
