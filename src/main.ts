import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve('./src/public'), {
    prefix: '/public',
  });

  app.setBaseViewsDir(resolve('./src/views'));

  app.setViewEngine('hbs');

  hbs.registerPartials(resolve('./src/views/partials'));
  hbs.registerPartials(resolve('./src/views/layouts'));

  await app.listen(3000);
}
bootstrap();
