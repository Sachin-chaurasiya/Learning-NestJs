import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "GET Hello World!"', () => {
      expect(appController.getHello()).toStrictEqual({
        message: 'GET Hello World!',
      });
    });

    it('should return "POST Hello World!"', () => {
      expect(appController.postHello()).toStrictEqual({
        message: 'POST Hello World!',
      });
    });
  });
});
