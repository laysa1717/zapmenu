import * as dotenv from 'dotenv';
dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurando o CORS
  const corsOptions = {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*', // Origem permitida (pode ser um array de URLs)
    methods: process.env.ALLOWED_METHODS || 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos HTTP permitidos
    credentials: process.env.ALLOW_CREDENTIALS === 'true', // Permitir envio de cookies ou credenciais
  };

  app.enableCors(corsOptions); // Habilitando o CORS com as opções definidas

  await app.listen(process.env.PORT ?? 3000); // Porta do servidor
}
bootstrap();
