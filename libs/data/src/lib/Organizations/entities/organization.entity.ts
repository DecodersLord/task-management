import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  Index,
} from 'typeorm';

@Entity({ name: 'organizations' })
export class Organization {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  @Index({ unique: true })
  name!: string;

  @Column({ nullable: true })
  parent_org!: number;

  @Column({ nullable: true })
  created_at!: Date;

  @Column({ nullable: true })
  updated_at!: Date;
}
