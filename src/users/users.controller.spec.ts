import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of users', () => {
    expect(controller.getUsers()).toEqual({
      data: [{ id: 1, name: 'John Doe', email: 'john@gmail.com' }],
    });
  });

  it('should return a user by id', () => {
    expect(controller.getUserById(1)).toEqual({
      data: {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
      },
    });
  });

  it('should create a user', () => {
    expect(
      controller.createUser({ name: 'Jane Doe', email: 'john@gmail.com' }),
    ).toEqual({
      data: { id: 2, name: 'Jane Doe', email: 'john@gmail.com' },
    });
  });

  it('should update a user', () => {
    expect(
      controller.updateUser(1, {
        name: 'Jane Doe',
        email: 'john1@gmail.com',
      }),
    ).toEqual({
      data: { id: 1, name: 'Jane Doe', email: 'john1@gmail.com' },
    });
  });

  it('should delete a user', () => {
    expect(controller.deleteUser(1)).toEqual({ data: null });
  });
});
