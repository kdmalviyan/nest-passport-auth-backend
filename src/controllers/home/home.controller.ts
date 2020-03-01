import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../services/home/home.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Home-controller')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
