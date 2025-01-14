import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  @Post()
  createUser(@Body('name') name: string, @Body('email') email: string) {
    return this.userService.createUser(name, email);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('email') email: string,
  ) {
    return this.userService.updateUser(id, name, email);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
