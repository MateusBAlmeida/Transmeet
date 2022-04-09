import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @IsPublic()
  getHello(): string {
    return this.appService.getHello();
  }
}
