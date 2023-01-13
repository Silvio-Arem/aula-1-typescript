// Classe = definindo os acessos das propriedades das classes podemos dizer se ela pode ser acessadas fora da classe ou não.
class Data {
    // dia: number;
    // mes: number;
    // ano: number;

    constructor(public dia: number, public mes: number, public ano: number = 1970) { // definindo o acesso direto nas propriedades passadas no construtor não precisamos repetí-las na classe ou com o this, pois ele já irá gerar  no arquivo js
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
}

let data = new Data(1, 1, 2023);
console.log(data.dia);

let data2 = new Data(1, 1);

// Modificadores de Acesso
class Carro {
    private velocidadeAtual: number = 0;

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220
    ) {}

    private alterarVelocidade(delta: number) {
        let novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade;
        } else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro('Chevrolet', 'prisma', 250);
carro.acelerar();

// Herança quando uma classe herda os metodos da classe pai e pode ter novos metodos
class Camaro extends Carro {
    private turbo = false;

    constructor() {
        super('Chevrolet', 'Camaro', 500);
    }

    ligarTurbo() {
        this.turbo = true;
    }
}

let camaro = new Camaro();
camaro.acelerar();
camaro.frear();
camaro.ligarTurbo();