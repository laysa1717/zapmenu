import { Injectable } from '@nestjs/common';

@Injectable()
export class MenuService {
  private dishes: any[] = [];

  getAllDishes() {
    return this.dishes;
  }

  addDish(dishData: any) {
    this.dishes.push(dishData);
    return { message: 'Dish added successfully!' };
  }
}
