import { Module } from '@nestjs/common';
import { OrganizationsModule } from './Organizations/organizations.module';
import { RoleModule } from './Role/role.module';
import { PermissionsModule } from './Permissions/permissions.module';

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [OrganizationsModule, RoleModule, PermissionsModule],
})
export class TaskManagementDataModule {}
