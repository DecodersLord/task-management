import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>
  ) {}

  create(data: {
    name: string;
    parent_org: number;
    created_at: Date;
    updated_at: Date;
  }): Promise<Organization> {
    const organization = this.organizationRepository.create(data);
    return this.organizationRepository.save(organization);
  }

  findAll(): Promise<Organization[]> {
    return this.organizationRepository.find();
  }
}
