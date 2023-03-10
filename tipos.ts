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

// Enum (é uma forma de dar nomes mais amigáveis ​​a conjuntos de valores numéricos)
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
let statusDataAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any (não recomendado, pois anula a tipagem do typescript)
let returnDaAPI: any = [123, 'Vitor', false];
let returnDaAPI2: any = {
    // .....
}

// void (não retorna nada)
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
let u: undefined = undefined;
let n: null = null;

// Object
function criar(objeto: object) {
    // ......
}
criar({
    propriedade: 1
})
// criar('Silvio') // Dá erro

// Never (um tipo que nunca termina)
function loopInfinito(): never {
    while (true) { }
}
// Never (também utilizado para erro)
function erro(mensagem: string): never {
    throw Error(mensagem)
}
// Never (também utilizado para falha)
function falha(): never {
    return erro('Algo falhou');
}

// Union Types (união de um ou mais tipos)
// aplicado em variáveis
let nota: string | number = 5;
// Aplicado em funções
function exibirNota(nota: number | string | boolean) {
    console.log(`A nota é ${nota}`);
}
exibirNota('10');
exibirNota(10);
exibirNota(true);

// Alias (cria atalhos para os tipos, pesonalizar tipos para seu uso)
// Alias mais personalizado
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
let funcionarios: Funcionario[] = [{
    nome: 'Silvio',
    sobrenome: 'Cesar',
    dataNascimento: new Date()
}, {
    nome: 'Fulano',
    sobrenome: 'De Tal',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}

// Valores Nulos ou Opcionais (podemos declarar com null também utilizando o pipe "|" ou também colocar o ponto de interrogação "?", tornando opcional a tipagem ou declaração)
// Utilizando o null
let altura: number | null = 1.6;
altura = null;
// utilizando o ?
type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

let contato: Contato = {
    nome: 'Silvio',
    telefone1: '12345678',
}

// Type Assertion (utilizando "as" ou o "<>" podemos afirmar depois o tipo da variável após declará-la como any por exemplo)
let minhaIdade: any = 23;
(minhaIdade as number).toString();
(<number>minhaIdade).toString();
// também podemos afirmar para o typescript que uma informação que ele está buscando no DOM é o que ele aceita, neste caso um HTMLInputElement ou HTMLImageElement de 2 formas, o "as" ou com o "<>" conforme abaixo:
let image = document.getElementById("imagem1") as HTMLImageElement;
let input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);
console.log(image.src);