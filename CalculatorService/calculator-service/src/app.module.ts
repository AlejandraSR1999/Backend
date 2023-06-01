import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorModule } from './calculator/calculator.module';
import { AuthModule } from './calculator/auth/auth.module';

@Module({
  imports: [CalculatorModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
