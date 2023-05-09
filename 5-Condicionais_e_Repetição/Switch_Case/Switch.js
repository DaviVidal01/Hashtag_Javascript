const usuário = {nome: "Davi", idade: "17", time: "Flamengo"}
const msgBoasVindas1 = "Bem vindo, torcedor Tricolor!";
const msgBoasVindas2 = "Bem vindo, torcedor Rubro-Negro!";
const msgBoasVindas3 = "Bem vindo, torcedor Vascaíno!";
const msgBoasVindas4 = "Bem vindo, torcedor Santista!";
const msgBoasVindas5 = "Bem vindo, torcedor Náutico!";
const msgBoasVindas6 = "Bem vindo, torcedor Atlético Mineiro!";
const msgBoasVindas7 = "Bem vindo, torcedor Cruzerense!";
const msgBoasVindas8 = "Bem vindo, torcedor Corinthiano!";

const msgBoasVindasGeral = "Bem vindo, amante do esporte!";

/*if(usuário.time === "Fluminense"){
    console.log(msgBoasVindas1);
} else if(usuário.time === "Flamengo"){
    console.log(msgBoasVindas2);
} else if(usuário.time === "Vasco"){
    console.log(msgBoasVindas3);
} else if(usuário.time === "Santos"){
    console.log(msgBoasVindas4);
} else if(usuário.time === "Náutico"){
    console.log(msgBoasVindas5);
} else if(usuário.time === "AtléticoMG"){
    console.log(msgBoasVindas6);
} else if(usuário.time === "Cruzeiro"){
    console.log(msgBoasVindas7);
} else if(usuário.time === "Corinthians"){
    console.log(msgBoasVindas8);
}*/

switch(usuário.time){
    case "Fluminense":
        console.log(msgBoasVindas1);
        break;
    case "Flamengo":
        console.log(msgBoasVindas2);
        break;
    case "Vasco":
        console.log(msgBoasVindas3);
        break;
    case "Santos":
        console.log(msgBoasVindas4);
        break;
    case "Náutico":
        console.log(msgBoasVindas5);
        break;
    case "AtléticoMG":
        console.log(msgBoasVindas6);
        break;
    case "Cruzeiro":
        console.log(msgBoasVindas7);
        break;
    case "Corinthians":
        console.log(msgBoasVindas8);
        break;
    default:
        console.log(msgBoasVindasGeral);
}

const msgEscolha = "Clique no setor para o qual deseja comprar o Ingresso!";
const msgFinal = "Divirta-se no Maracanã!!!";

console.log(msgEscolha);
console.log(msgFinal);