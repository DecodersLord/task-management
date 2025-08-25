import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private RoleRepository: Repository<Role>
  ) {}

  create(data: { id: string; role_name: string; rolePermissions: string[] }) {
    const organization = this.RoleRepository.create(data);
    return this.RoleRepository.save(organization);
  }

  findAll() {
    return this.RoleRepository.find();
  }
}
