"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculatorModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const jwt_strategy_1 = require("./auth/jwt.strategy");
const calculator_controller_1 = require("./calculator.controller");
const calculator_service_1 = require("./calculator.service");
let CalculatorModule = class CalculatorModule {
};
CalculatorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.register({
                secret: 'your-secret-key',
                signOptions: { expiresIn: '60m' },
            }),
        ],
        controllers: [calculator_controller_1.CalculatorController],
        providers: [calculator_service_1.CalculatorService, jwt_strategy_1.JwtStrategy],
    })
], CalculatorModule);
exports.CalculatorModule = CalculatorModule;
//# sourceMappingURL=calculator.module.js.map