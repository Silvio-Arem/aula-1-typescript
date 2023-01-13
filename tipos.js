"use strict";
// bibliografia: https://www.typescriptlang.org/docs/handbook/basic-types.html
// Boolean
var contaPaga = false;
// Number (não precisa específicar o tamanho)
var idade = 27;
var avaliacao = 4.5;
// String
var nome = 'Silvio Cesar';
// Array
var idades = [23, 28, 45, 32, 45];
// 2º forma de Array
var idades2 = [23, 28, 45, 32, 45];
// Tuple (parecido com array, mas estritamente definido)
var jogadores;
jogadores = ['Silvio', 3, true];
// Enum (é uma forma de dar nomes mais amigáveis ​​a conjuntos de valores numéricos)
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDataAprovacao = StatusAprovacao.Aprovado;
// Any (não recomendado, pois anula a tipagem do typescript)
var returnDaAPI = [123, 'Vitor', false];
var returnDaAPI2 = {
// .....
};
// void (não retorna nada)
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ......
}
criar({
    propriedade: 1
});
// criar('Silvio') // Dá erro
// Never (um tipo que nunca termina)
function loopInfinito() {
    while (true) { }
}
// Never (também utilizado para erro)
function erro(mensagem) {
    throw Error(mensagem);
}
// Never (também utilizado para falha)
function falha() {
    return erro('Algo falhou');
}
// Union Types (união de um ou mais tipos)
// aplicado em variáveis
var nota = 5;
// Aplicado em funções
function exibirNota(nota) {
    console.log("A nota \u00E9 ".concat(nota));
}
exibirNota('10');
exibirNota(10);
exibirNota(true);
var funcionarios = [{
        nome: 'Silvio',
        sobrenome: 'Cesar',
        dataNascimento: new Date()
    }, {
        nome: 'Fulano',
        sobrenome: 'De Tal',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}
// Valores Nulos ou Opcionais (podemos declarar com null também utilizando o pipe "|" ou também colocar o ponto de interrogação "?", tornando opcional a tipagem ou declaração)
// Utilizando o null
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Silvio',
    telefone1: '12345678',
};
// Type Assertion (utilizando "as" ou o "<>" podemos afirmar depois o tipo da variável após declará-la como any por exemplo)
var minhaIdade = 23;
minhaIdade.toString();
minhaIdade.toString();
// também podemos afirmar para o typescript que uma informação que ele está buscando no DOM é o que ele aceita, neste caso um HTMLInputElement ou HTMLImageElement de 2 formas, o "as" ou com o "<>" conforme abaixo:
var image = document.getElementById("imagem1");
var input = document.getElementById("numero1");
console.log(input.value);
console.log(image.src);
