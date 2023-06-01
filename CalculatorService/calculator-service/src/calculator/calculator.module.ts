import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './auth/jwt.strategy';
import { CalculatorController } from './calculator.controller';
import { CalculatorService } from './calculator.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'your-secret-key',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [CalculatorController],
  providers: [CalculatorService, JwtStrategy],
})
export class CalculatorModule {}
