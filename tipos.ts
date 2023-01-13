// bibliografia: https://www.typescriptlang.org/docs/handbook/basic-types.html

// Boolean
let contaPaga: boolean = false;

// Number (não precisa específicar o tamanho)
let idade: number = 27;
let avaliacao: number = 4.5;


// String
let nome: string = 'Silvio Cesar';

// Array
let idades: number[] = [23, 28, 45, 32, 45];
// 2º forma de Array
let idades2: Array<number> = [23, 28, 45, 32, 45];

// Tuple (parecido com array, mas estritamente definido)
let jogadores: [string, number, boolean];
jogadores = ['Silvio', 3, true];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
let statusDataAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
let returnDaAPI: any = [123, 'Vitor', false];