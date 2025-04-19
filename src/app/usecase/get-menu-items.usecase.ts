import { IFirebaseService } from '../../core/interface/firebase.service.interface';
import { MenuItem } from '../../core/entities/menu-item.entity';

export class GetMenuItemsUseCase {
    constructor(private readonly firebaseService: IFirebaseService) {}

    async execute(): Promise<MenuItem[]> {
        const data = await this.firebaseService.getCollection('menu-items');
        return data.map(
            (item) =>
                new MenuItem(
                    item.id,
                    item.categoria,
                    item.nome,
                    item.descricao,
                    item.preco,
                    item.url,
                    item.alergenos
                )
        );
    }
}
