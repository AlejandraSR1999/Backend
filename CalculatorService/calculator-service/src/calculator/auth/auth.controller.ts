import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    const validUser = { id: 1, username: 'testuser' }; 
    const validPassword = 'testpassword';

    if (username === validUser.username && password === validPassword) {
      return this.authService.login(validUser);
    } else {
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}

