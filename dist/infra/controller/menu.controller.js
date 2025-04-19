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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
let MenuController = class MenuController {
    constructor() { }
    async getMenu() {
        try {
            console.log('Cardápio');
            return { message: 'Cardápio obtido com sucesso!' };
        }
        catch (error) {
            console.error('Erro ao obter o cardápio:', error);
            throw new common_1.HttpException('Erro ao obter o cardápio', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Get)('getMenu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "getMenu", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)('v1/cardapio'),
    __metadata("design:paramtypes", [])
], MenuController);
