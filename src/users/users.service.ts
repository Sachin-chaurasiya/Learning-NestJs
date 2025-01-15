import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
    },
  ];

  getUsers() {
    return {
      data: this.users,
    };
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    return {
      data: user,
    };
  }

  createUser(user: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      name: user.name,
      email: user.email,
    };

    this.users.push(newUser);

    return {
      data: newUser,
    };
  }

  updateUser(id: number, user: UpdateUserDto) {
    const updatedUser = {
      id,
      name: user.name,
      email: user.email,
    };

    this.users[id - 1] = updatedUser;

    return {
      data: updatedUser,
    };
  }

  deleteUser(id: number) {
    this.users.splice(id - 1, 1);

    return {
      data: null,
    };
  }
}
