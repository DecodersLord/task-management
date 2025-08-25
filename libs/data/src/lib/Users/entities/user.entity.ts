import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  Index,
} from 'typeorm';
import { Organization } from '../../Organizations/entities/organization.entity';
import { Role } from '../../Role/entities/role.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Index({ unique: true })
  @Column()
  email!: string;

  @Column()
  name!: string;

  @Column()
  passwordHash!: string;

  @ManyToOne(() => Organization, { eager: true })
  @JoinColumn({ name: 'organization_id' })
  organization!: Organization;

  @ManyToOne(() => Role, { eager: true, nullable: true })
  @JoinColumn({ name: 'role_id' })
  role?: Role;
}
