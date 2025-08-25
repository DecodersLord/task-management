import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Permissions } from './entities/permission.entity';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permissions)
    private permissionRepository: Repository<Permissions>
  ) {}

  create(data: {
    id: string;
    permission_name: string;
    roles: [];
  }): Promise<Permissions> {
    const organization = this.permissionRepository.create(data);
    return this.permissionRepository.save(organization);
  }

  findAll(): Promise<Permissions[]> {
    return this.permissionRepository.find();
  }
}
