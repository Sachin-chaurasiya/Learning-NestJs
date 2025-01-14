import { Injectable } from '@nestjs/common';

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
    return {
      data: {
        ...this.users[0],
        id: id,
      },
    };
  }

  createUser(name: string, email: string) {
    const newUser = {
      id: this.users.length + 1,
      name,
      email,
    };

    this.users.push(newUser);

    return {
      data: newUser,
    };
  }

  updateUser(id: number, name: string, email: string) {
    const updatedUser = {
      id,
      name,
      email,
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
