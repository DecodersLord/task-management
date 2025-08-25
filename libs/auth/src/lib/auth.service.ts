import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from '@task-management/data';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from '@task-management/data';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async register(name: string, email: string, password: string): Promise<User> {
    const existing = await this.userService.findByEmail(email);
    if (existing) throw new ConflictException('Email already in use');

    const passwordHash = await bcrypt.hash(password, 10);
    return this.userService.createUser({ name, email, passwordHash });
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.userService.findByEmail(email, {
      relations: [
        'role',
        'role.rolePermissions',
        'role.rolePermissions.permission',
      ],
    });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isValid = await bcrypt.compare(password, user.passwordHash);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    return user;
  }

  async login(user: User) {
    // Extract permissions from the user's role
    const permissions =
      user.role?.permissions?.map((rp) => rp.permission_name) || [];

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role?.id,
      permissions,
    };

    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role?.id,
        permissions,
      },
    };
  }
}
