// Escreva uma função que recebe um número e retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = Buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número NÃO é divisível por 3 e 5 = Retorna o próprio número
// Checar se o número é realmente um número = Retorna o valor
// Use a função com números de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return 'Valor não é um número';
    else {
        if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
        if (numero % 5 === 0) return 'Buzz'
        if (numero % 3 === 0) return 'Fizz'
        return numero;
    }
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}