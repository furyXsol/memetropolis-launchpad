import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { MainModule } from './main.module';

import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);

  const config = new DocumentBuilder()
    .setTitle('MEMETROPOLIS Backend')
    .setDescription('MemeTropolis Backend Description')
    .setVersion('1.0')
    .addApiKey(
      {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
