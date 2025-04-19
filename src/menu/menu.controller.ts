import { Controller, Get, Post, Body } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get()
  getAllDishes() {
    return this.menuService.getAllDishes();
  }

  @Post()
  addDish(@Body() dishData: any) {
    return this.menuService.addDish(dishData);
  }
}
