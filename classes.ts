// Classe definindo os acessos das propriedades das classes podemos dizer se ela pode ser acessadas fora da classe ou não.
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