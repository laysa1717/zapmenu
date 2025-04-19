import { FirebaseService } from '../../firebase/firebase.service';
import { MenuItemDto } from '../dto/menu-item.dto';
export declare class MenuController {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    listMenu(): Promise<MenuItemDto[]>;
    saveMenu(menuItemDto: MenuItemDto): Promise<{
        message: string;
    }>;
    deleteMenu(id: string): Promise<{
        message: string;
    }>;
}
