/*
    *Aritméticos
        + Adição ou Concatenação
        - Subtração
        / Divisão
        * Multiplicação
        ** Potenciação
        % Resto da divisão
        
        Ordem de leitura ("Força")
            1: () Parenteses
            2: ** Potenciação
            3: * / %
            4: + -

    Incremento = ++
    Decremento = --

*/

let contador = 1;
console.log(contador++);
console.log(contador);
console.log('-----------');

contador = 1;
console.log(++contador);
console.log(contador);
console.log('-----------');

contador = 3;
contador += 2;
contador *= 2;
contador -= 2;
contador **= 3;
console.log(contador);
console.log('-----------');

const num1 = 10;
const num2 = parseInt('5'); //Transforma o valor dentro dos paranteses para um inteiro, sendo outra variavel um 'parseFloat' para números de ponto flutuante (decimais). Caso seja uma string para numero, irá receber o código de "NaN - Not a Number"
console.log(num1 + num2);
console.log(typeof num2);