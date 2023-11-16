import { config } from "dotenv"
config()
import "reflect-metadata"
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true
  });

  const configService = app.get(ConfigService)
  const port = configService.get("PORT")

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  }));

  const config = new DocumentBuilder()
    .setTitle('Devit-se-Backend')
    .setDescription('Api for Devit-se-Backend.')
    .setVersion('1.1.1')
    .addBearerAuth()
    .addTag('Jobs')
    .addTag('Company')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);

  console.info('Server initiated on port ' + process.env.PORT);
}

bootstrap()
