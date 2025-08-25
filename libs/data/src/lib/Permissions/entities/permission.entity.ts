import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  Index,
} from 'typeorm';

@Entity()
export class Permissions {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  permission_name!: string;
}
