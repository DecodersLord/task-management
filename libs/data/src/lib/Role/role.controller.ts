import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly rolesService: RoleService) {}

  @Post()
  create(@Body() createRoleDto: RoleDto) {
    return this.rolesService.create(createRoleDto);
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }
}
