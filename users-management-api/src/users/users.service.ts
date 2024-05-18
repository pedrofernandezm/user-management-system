import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  private readonly storageHost = 'http://storage:3007';
  constructor(private readonly httpService: HttpService) {}

  async create(createUserDto: CreateUserDto) {
    const { data } = await firstValueFrom(
      this.httpService
        .post(`${this.storageHost}/create`, { ...createUserDto })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error);
            throw 'Something went wrong';
          }),
        ),
    );
    return data;
  }

  async list() {
    const { data } = await firstValueFrom(
      this.httpService.get(`${this.storageHost}/list`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error);
          throw 'Something went wrong';
        }),
      ),
    );
    return data;
  }

  async delete(id: string) {
    const { data } = await firstValueFrom(
      this.httpService.delete(`${this.storageHost}/delete/${id}`).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error);
          throw 'Something went wrong';
        }),
      ),
    );
    return data;
  }
}
