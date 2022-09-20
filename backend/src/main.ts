import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = NestFactory.create(AppModule);
    (await app).enableCors();
    (await app).listen(PORT, () =>
      console.log(`Я обязательно выживу, PORT: ${PORT}`),
    );
  } catch (error) {
    console.log('Я умер', error.message);
  }
};
start();
