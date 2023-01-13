"use strict";
// Classe definindo os acessos das propriedades das classes podemos dizer se ela pode ser acessadas fora da classe ou não.
var Data = /** @class */ (function () {
    // dia: number;
    // mes: number;
    // ano: number;
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        // this.dia = dia;
        // this.mes = mes;
        // this.ano = ano;
    }
    return Data;
}());
var data = new Data(1, 1, 2023);
console.log(data.dia);
var data2 = new Data(1, 1);
