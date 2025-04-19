import { Controller, Post, Get, HttpException, HttpStatus } from '@nestjs/common';

@Controller('v1/cardapio')
export class MenuController {
    constructor() {}

    @Get('getMenu')
    async getMenu(): Promise<any> {
        try {
            console.log('Cardápio');
            return { message: 'Cardápio obtido com sucesso!' };
        } catch (error) {
            console.error('Erro ao obter o cardápio:', error);
            throw new HttpException(
                'Erro ao obter o cardápio',
                HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
    }
}
