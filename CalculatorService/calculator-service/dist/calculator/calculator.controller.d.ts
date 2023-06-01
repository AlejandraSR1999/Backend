import { CalculatorService } from './calculator.service';
export declare class CalculatorController {
    private readonly calculatorService;
    constructor(calculatorService: CalculatorService);
    sum(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number;
}
