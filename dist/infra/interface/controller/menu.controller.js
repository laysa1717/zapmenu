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
exports.MenuController = void 0;
const common_1 = require("@nestjs/common");
const firebase_service_1 = require("../../firebase/firebase.service");
const menu_item_dto_1 = require("../dto/menu-item.dto");
let MenuController = class MenuController {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    async listMenu() {
        const menuItems = await this.firebaseService.getCollection('menu-items');
        return menuItems;
    }
    async saveMenu(menuItemDto) {
        await this.firebaseService.addDocument('menu-items', menuItemDto);
        return { message: 'Menu item saved successfully' };
    }
    async deleteMenu(id) {
        await this.firebaseService.deleteDocument('menu-items', id);
        return { message: `Menu item with ID ${id} deleted successfully` };
    }
};
exports.MenuController = MenuController;
__decorate([
    (0, common_1.Get)('/listMenu'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "listMenu", null);
__decorate([
    (0, common_1.Post)('/saveMenu'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [menu_item_dto_1.MenuItemDto]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "saveMenu", null);
__decorate([
    (0, common_1.Delete)('/deleteMenu/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MenuController.prototype, "deleteMenu", null);
exports.MenuController = MenuController = __decorate([
    (0, common_1.Controller)('menu'),
    __metadata("design:paramtypes", [firebase_service_1.FirebaseService])
], MenuController);
//# sourceMappingURL=menu.controller.js.map