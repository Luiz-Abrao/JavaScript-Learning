//Tipos de dados primitivos: String, number, undefined, null, boolean, symbol.
const num1 = 10;
const num2 = 10.52;
let nomeAluno; //undefined -> não aponta pra local na memória
const sobrenomeAluno = null; //Não aponta para local na memória
const aprovado = false; //Boolean = true, false (lógico)

const arrayA = [1, 2];
const b = arrayA;
console.log(arrayA, b);

b.push(3);
console.log(arrayA, b);

