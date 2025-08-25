import { ApiProperty } from '@nestjs/swagger';
import { Organization } from '../../Organizations/entities/organization.entity';
import { Role } from '../../Role/entities/role.entity';

export class UserDto {
  @ApiProperty()
  id!: string;

  @ApiProperty()
  email!: string;

  @ApiProperty()
  name!: string;

  @ApiProperty({ type: () => Organization })
  organization_id!: Organization;

  @ApiProperty({ type: () => Role })
  role_id!: Role;
}
