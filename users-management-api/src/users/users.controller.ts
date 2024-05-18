import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    await this.usersService.create(createUserDto);
    res.status(HttpStatus.CREATED).send();
  }

  @Get()
  async list(@Res() res: Response) {
    const users = await this.usersService.list();
    res.status(HttpStatus.OK).json(users);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: Response) {
    await this.usersService.delete(id);
    res.status(HttpStatus.OK).json({ id });
  }
}
