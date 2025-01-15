import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of users', () => {
    expect(service.getUsers()).toEqual({
      data: [{ id: 1, name: 'John Doe', email: 'john@gmail.com' }],
    });
  });

  it('should return a user by id', () => {
    expect(service.getUserById(1)).toEqual({
      data: {
        id: 1,
        name: 'John Doe',
        email: 'john@gmail.com',
      },
    });
  });

  it('should create a user', () => {
    expect(
      service.createUser({ name: 'Jane Doe', email: 'john@gmail.com' }),
    ).toEqual({
      data: { id: 2, name: 'Jane Doe', email: 'john@gmail.com' },
    });
  });

  it('should update a user', () => {
    expect(
      service.updateUser(1, {
        name: 'Jane Doe',
        email: 'john1@gmail.com',
      }),
    ).toEqual({
      data: { id: 1, name: 'Jane Doe', email: 'john1@gmail.com' },
    });
  });

  it('should delete a user', () => {
    expect(service.deleteUser(1)).toEqual({ data: null });
  });
});
