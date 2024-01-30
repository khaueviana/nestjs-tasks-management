import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigurationModule } from './config/config.module';
import { ConfigurationService } from './config/config.service';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: async (configurationService: ConfigurationService) => ({
        type: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        host: configurationService.database.host,
        port: configurationService.database.port,
        username: configurationService.database.username,
        password: configurationService.database.password,
        database: configurationService.database.database,
      }),
    }),
    AuthModule,
  ],
})
export class AppModule {}
