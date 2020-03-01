import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { LocalAuthGuard } from 'src/services/auth/local.auth.guard';
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req, @Body() user) {
    return this.authService.login(user);
  }
}