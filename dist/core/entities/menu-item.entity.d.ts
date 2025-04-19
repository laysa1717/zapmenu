export declare class MenuItem {
    readonly id: string;
    readonly categoria: string;
    readonly nome: string;
    readonly descricao: string;
    readonly preco: number;
    readonly url: string;
    readonly alergenos: string[];
    constructor(id: string, categoria: string, nome: string, descricao: string, preco: number, url: string, alergenos: string[]);
}
