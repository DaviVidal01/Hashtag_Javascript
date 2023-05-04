const mensagemTela = "Olá mundo! Eu sou Davi, conhecido por DaviVidal01 no GitHub";
let idade = "E tenho 17 anos";

console.log(mensagemTela);
console.log(idade);
console.log("---------------------------------")

//Variável Let podem ser alterados
//Variável Const não podem ser alterados
idade = "Davi é meu nome";
console.log(idade);

//O Código dará ERRO pois "mensagemTela" é uma variável CONSTANTE
//Então ela não pode ser mudada como estou fazendo logo abaixo:
mensagemTela = "Davi é meu nome";
console.log(mensagemTela);