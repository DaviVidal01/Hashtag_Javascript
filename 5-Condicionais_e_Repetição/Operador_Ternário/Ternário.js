// ----[Condição-Booleana?Caso-Verdadeiro:Caso-Falso]----

const usuário = {nome: "Davi", idade: "17", time: "Flamengo"}
const msgBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const msgBoasVindas2 = "Bem vindo, torcedor Rubro-Negro!";
const msgBoasVindasGeral = "Bem vindo, amante do esporte!";

/*if(usuário.time === "Fluminense"){
    console.log(msgBoasVindas1);
} 
if(usuário.time === "Flamengo") {
    console.log(msgBoasVindas2);
}*/

usuário.time === "Fluminense" && usuário.idade >= 18
 ? console.log(msgBoasVindas1) 
 : usuário.time === "Flamengo" && usuário.idade >= 18
  ? console.log(msgBoasVindas2)
  :usuário.idade >= 18
  ? console.log(msgBoasVindasGeral)
  :console.log("Não vendemos ingresso para torcedores menores de 18 anos.");

const msgEscolha = "Clique no setor para o qual deseja comprar o Ingresso!";
const msgFinal = "Divirta-se no Maracanã!!!";

console.log(msgEscolha);
console.log(msgFinal);