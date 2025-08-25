import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

import { LoginDto } from '@task-management/data';
import { RegisterDto } from '@task-management/data';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    const user = await this.authService.register(
      body.name,
      body.email,
      body.password
    );
    return { id: user.id, email: user.email, name: user.name };
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.authService.validateUser(body.email, body.password);
    return this.authService.login(user);
  }
}
