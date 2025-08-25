import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindOneOptions } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  createUser(data: {
    name: string;
    email: string;
    passwordHash?: string;
    organization_id?: string;
    role_id?: string;
  }): Promise<User> {
    const user = this.userRepository.create(data);
    return this.userRepository.save(user);
  }

  getUsers(): Promise<User[]> {
    return this.userRepository.find({ relations: ['role'] });
  }

  // Updated to accept optional relations
  findByEmail(
    email: string,
    options?: FindOneOptions<User>
  ): Promise<User | null> {
    return this.userRepository.findOne({
      where: { email },
      relations: options?.relations,
    });
  }
}
