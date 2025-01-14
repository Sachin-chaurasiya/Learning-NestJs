import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'GET Hello World!',
    };
  }

  postHello() {
    return {
      message: 'POST Hello World!',
    };
  }

  putHello() {
    return {
      message: 'PUT Hello World!',
    };
  }

  patchHello() {
    return {
      message: 'PATCH Hello World!',
    };
  }

  deleteHello() {
    return {
      message: 'DELETE Hello World!',
    };
  }
}
