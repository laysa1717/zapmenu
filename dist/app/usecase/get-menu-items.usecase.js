"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetMenuItemsUseCase = void 0;
const menu_item_entity_1 = require("../../core/entities/menu-item.entity");
class GetMenuItemsUseCase {
    constructor(firebaseService) {
        this.firebaseService = firebaseService;
    }
    async execute() {
        const data = await this.firebaseService.getCollection('menu-items');
        return data.map((item) => new menu_item_entity_1.MenuItem(item.id, item.categoria, item.nome, item.descricao, item.preco, item.url, item.alergenos));
    }
}
exports.GetMenuItemsUseCase = GetMenuItemsUseCase;
//# sourceMappingURL=get-menu-items.usecase.js.map