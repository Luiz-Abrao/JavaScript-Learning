// Luiz Henrique tem 25 anos, pesa  79kg, tem 1.84 de altura e seu IMC é de 23.3333
// Luiz Henrique nasceu em 1998

const nome = 'Luiz Henrique';
const sobrenome = 'Abrão';
const idade = 25;
const peso = 79;
const altura = 1.84;
let imc; //  peso/(altura²)
let anoNascimento;

imc = peso/(altura*altura);
anoNascimento = 2024 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos e', imc, 'de IMC e nasceu em', anoNascimento);

console.log(`${nome} ${sobrenome} tem ${idade} anos e ${imc} de IMC e nasceu em ${anoNascimento}`);