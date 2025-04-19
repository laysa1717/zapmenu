import { IFirebaseService } from '../../core/interface/firebase.service.interface';
import { MenuItem } from '../../core/entities/menu-item.entity';
export declare class GetMenuItemsUseCase {
    private readonly firebaseService;
    constructor(firebaseService: IFirebaseService);
    execute(): Promise<MenuItem[]>;
}
