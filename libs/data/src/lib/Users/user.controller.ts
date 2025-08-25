import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private usersService: UserService) {}

  @Post()
  async create(
    @Body()
    body: {
      name: string;
      email: string;
      passwordHash: string;
      organization_id: string;
      role_id: number;
    }
  ) {
    return this.usersService.createUser(body);
  }

  @Get()
  async findAll() {
    return this.usersService.getUsers();
  }

  @Get(':email')
  async findByEmail(email: string) {
    return this.usersService.findByEmail(email);
  }
}
