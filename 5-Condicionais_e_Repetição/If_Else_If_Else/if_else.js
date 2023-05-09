const usuário = {nome: "Davi", idade: "17", time: "Flamengo"}
const msgBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const msgBoasVindas2 = "Bem vindo, torcedor Rubro Negro!";
const msgBoasVindas3 = "Bem vindo, amante do esporte!";

if(usuário.time === "Fluminense"){
    console.log(msgBoasVindas1);
} else if(usuário.time === "Flamengo"){
    console.log(msgBoasVindas2)
} else {
    console.log(msgBoasVindas3);
}

const msgEscolha = "Clique no setor para o qual deseja comprar o Ingresso!";
const msgFinal = "Divirta-se no Maracanã!!!";

console.log(msgEscolha);
console.log(msgFinal);