import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinTable,
  Index,
} from 'typeorm';

import { RolePermissions } from '../../RolePermissions/RolePermissions.entity';

@Entity({ name: 'roles' })
export class Role {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  role_name!: string;

  @OneToMany(() => RolePermissions, (rp) => rp.role, { eager: true })
  @Column({
    type: 'text',
    array: true,
    default: [],
    name: 'permissions',
    nullable: true,
  })
  permissions!: string[];
}
