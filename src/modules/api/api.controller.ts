import { Controller, Get } from '@nestjs/common';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}
  
  @Get('markets')
  getMarkets() {
    const param = 'markets'
    // return 'Fetching markets...';
    return this.apiService.findAllMercedes(param);
  }
}
