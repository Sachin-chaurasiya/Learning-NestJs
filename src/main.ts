import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { AllExceptionsFilter } from './all-exceptions.filter';
import { PrismaClientExceptionFilter } from 'nestjs-prisma';
import { HttpStatus } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  // app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalFilters(
    new PrismaClientExceptionFilter(httpAdapter, {
      // Prisma Error Code: HTTP Status Response
      P2000: HttpStatus.BAD_REQUEST,
      P2002: HttpStatus.CONFLICT,
      P2025: HttpStatus.NOT_FOUND,
    }),
  );

  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
