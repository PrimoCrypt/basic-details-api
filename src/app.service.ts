import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getBasicDetails(): string {
    return JSON.stringify({
      email: 'yhungdew@gmail.com',
      current_datetime: new Date().toISOString(),
      github_url: 'https://github.com/PrimoCrypt/basic-details-api',
    });
  }
}
