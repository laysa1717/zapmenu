export class MenuItem {
    constructor(
        public readonly id: string,
        public readonly categoria: string,
        public readonly nome: string,
        public readonly descricao: string,
        public readonly preco: number,
        public readonly url: string,
        public readonly alergenos: string[]
    ) {}
}
