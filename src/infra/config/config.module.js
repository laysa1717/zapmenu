"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvConfigModule = void 0;
var config_1 = require("@nestjs/config");
var common_1 = require("@nestjs/common");
var config_service_1 = require("./config.service");
var EnvConfigModule = /** @class */ (function () {
    function EnvConfigModule() {
    }
    EnvConfigModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: ['.env'],
                    load: [config_service_1.default],
                    isGlobal: true,
                }),
            ],
        })
    ], EnvConfigModule);
    return EnvConfigModule;
}());
exports.EnvConfigModule = EnvConfigModule;
