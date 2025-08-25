import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {
  OrganizationsController,
  OrganizationsModule,
  OrganizationsService,
  PermissionsModule,
  RoleModule,
  UserController,
  UserModule,
  UserService,
} from '@task-management/data';
import { User } from '@task-management/data';
import { Organization } from '@task-management/data';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@task-management/auth';
import { Role } from '@task-management/data';
import { Permissions } from '@task-management/data';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: process.env.POSTGRES_PORT
        ? Number(process.env.POSTGRES_PORT)
        : 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'root',
      database: process.env.POSTGRES_DB || 'task-management',
      entities: [User, Organization, Role, Permissions],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([User, Role, Organization]),
    UserModule,
    AuthModule,
    OrganizationsModule,
    PermissionsModule,
    RoleModule,
  ],
  controllers: [AppController, UserController, OrganizationsController],
  providers: [AppService, UserService],
})
export class AppModule {}
