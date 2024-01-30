import { ConfigService } from '@nestjs/config';
import { AuthenticationConfiguration } from './config.auth.js';
import { DatabaseConfiguration } from './config.database.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigurationService {
  readonly database: DatabaseConfiguration;

  readonly authentication: AuthenticationConfiguration;

  constructor(private configService: ConfigService) {
    this.database = new DatabaseConfiguration(
      this.configService.get('DB_HOST'),
      this.configService.get('DB_PORT'),
      this.configService.get('DB_USERNAME'),
      this.configService.get('DB_PASSWORD'),
      this.configService.get('DB_DATABASE'),
    );

    this.authentication = new AuthenticationConfiguration(
      this.configService.get('JWT_SECRET'),
    );
  }
}
