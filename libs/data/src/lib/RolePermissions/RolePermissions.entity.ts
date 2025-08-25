import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from '../Role/entities/role.entity';
import { Permissions } from '../Permissions/entities/permission.entity';

@Entity({ name: 'RolePermissions' })
export class RolePermissions {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Role, (role) => role.rolePermissions)
  @JoinColumn({ name: 'role_id' })
  role!: Role;

  @ManyToOne(() => Permissions)
  @JoinColumn({ name: 'permission_id' })
  permission!: Permissions;
}
