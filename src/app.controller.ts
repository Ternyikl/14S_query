import { Controller, Get, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello(
    @Query('title') title: string = 'Valami',
    @Query('bgcolor') bgcolor: string = 'white') {
    
    //if(!title) {  title = 'Valami' }

    return {
      title: title, //|| 'Valami'
      bgcolor: bgcolor
    }
  }
}
