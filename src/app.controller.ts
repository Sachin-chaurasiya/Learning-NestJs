import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post()
  postHello() {
    return this.appService.postHello();
  }

  @Put()
  putHello() {
    return this.appService.putHello();
  }

  @Patch()
  patchHello() {
    return this.appService.patchHello();
  }

  @Delete()
  deleteHello() {
    return this.appService.deleteHello();
  }
}
