import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { CreateUserDto } from './definitions';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('list')
  async list(@Res() res: Response) {
    const response = await this.appService.list();
    res.status(HttpStatus.OK).json(response);
  }

  @Post('create')
  async create(@Res() res: Response, @Body() data: CreateUserDto) {
    await this.appService.create(data);
    res.status(HttpStatus.CREATED).send();
  }

  @Delete('delete/:id')
  async delete(@Res() res: Response, @Param() params: any) {
    const { id } = params;
    const response = await this.appService.delete(id);
    res.status(HttpStatus.OK).json(response);
  }
}
