import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComponentsController } from './components/components.controller';

@Module({
  imports: [],
  controllers: [AppController, ComponentsController],
  providers: [AppService],
})
export class AppModule {}
