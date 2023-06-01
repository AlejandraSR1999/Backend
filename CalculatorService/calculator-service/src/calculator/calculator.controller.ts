import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt.auth.guard';
import { CalculatorService } from './calculator.service';

@Controller('calculator')
export class CalculatorController {
  constructor(private readonly calculatorService: CalculatorService) {}

  @UseGuards(JwtAuthGuard)
  @Post('sum')
  sum(@Body('a') a: number, @Body('b') b: number): number {
    return this.calculatorService.sum(a, b);
  }

  @UseGuards(JwtAuthGuard)
  @Post('subtract')
  subtract(@Body('a') a: number, @Body('b') b: number): number {
    return this.calculatorService.subtract(a, b);
  }

  @UseGuards(JwtAuthGuard)
  @Post('multiply')
  multiply(@Body('a') a: number, @Body('b') b: number): number {
    return this.calculatorService.multiply(a, b);
  }

  @UseGuards(JwtAuthGuard)
  @Post('divide')
  divide(@Body('a') a: number, @Body('b') b: number): number {
    return this.calculatorService.divide(a, b);
  }
}
