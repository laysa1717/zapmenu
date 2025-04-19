import { Controller, Get, Body, Post, Delete, Param } from '@nestjs/common';
import { FirebaseService } from '../../firebase/firebase.service';
import { MenuItemDto } from '../dto/menu-item.dto';

@Controller('menu')
export class MenuController {
    constructor(private readonly firebaseService: FirebaseService) {}

    @Get('/listMenu')
    async listMenu(): Promise<MenuItemDto[]> {
        const menuItems = await this.firebaseService.getCollection('menu-items');
        return menuItems;
    }

    @Post('/saveMenu')
    async saveMenu(@Body() menuItemDto: MenuItemDto): Promise<{ message: string }> {
        await this.firebaseService.addDocument('menu-items', menuItemDto);
        return { message: 'Menu item saved successfully' };
    }

    @Delete('/deleteMenu/:id')
    async deleteMenu(@Param('id') id: string): Promise<{ message: string }> {
        await this.firebaseService.deleteDocument('menu-items', id);
        return { message: `Menu item with ID ${id} deleted successfully` };
    }
}
