"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("./auth/jwt.auth.guard");
const calculator_service_1 = require("./calculator.service");
let CalculatorController = class CalculatorController {
    constructor(calculatorService) {
        this.calculatorService = calculatorService;
    }
    sum(a, b) {
        return this.calculatorService.sum(a, b);
    }
    subtract(a, b) {
        return this.calculatorService.subtract(a, b);
    }
    multiply(a, b) {
        return this.calculatorService.multiply(a, b);
    }
    divide(a, b) {
        return this.calculatorService.divide(a, b);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('sum'),
    __param(0, (0, common_1.Body)('a')),
    __param(1, (0, common_1.Body)('b')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], CalculatorController.prototype, "sum", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('subtract'),
    __param(0, (0, common_1.Body)('a')),
    __param(1, (0, common_1.Body)('b')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], CalculatorController.prototype, "subtract", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('multiply'),
    __param(0, (0, common_1.Body)('a')),
    __param(1, (0, common_1.Body)('b')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], CalculatorController.prototype, "multiply", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('divide'),
    __param(0, (0, common_1.Body)('a')),
    __param(1, (0, common_1.Body)('b')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], CalculatorController.prototype, "divide", null);
CalculatorController = __decorate([
    (0, common_1.Controller)('calculator'),
    __metadata("design:paramtypes", [calculator_service_1.CalculatorService])
], CalculatorController);
exports.CalculatorController = CalculatorController;
//# sourceMappingURL=calculator.controller.js.map