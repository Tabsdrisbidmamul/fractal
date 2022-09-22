import { Controller, Get } from '@nestjs/common';

@Controller('components')
export class ComponentsController {
  @Get()
  getComponent(): string {
    return 'a component';
  }
}
