//Resolução do Exercício 1
function calcularNotas(p1, p2, p3){
    const mediaDasNotas = (p1 + p2 + p3) /3;
    console.log(`A média desse aluno é ${mediaDasNotas}`);
}

//Resolução do Exercício 2 
function calcularMedias(mediaDasNotas, p4){
    mediaFinal = (mediaDasNotas + p4) /2;
    console.log(`A média final desse aluno é ${mediaFinal}`);
}

//Resolução do Exercício 3
function conversãoC_F(celsius){
    farenheit = (9/5) * celsius + 32;
    console.log(`A temperatura corresponde em Farenheit é de ${farenheit}ºF`);
}

//Resolução do Exercício 4
function produtoValorImposto(produto){
    const produtoComImposto = produto * 1.08875;
    console.log(`O valor a ser pago é ${produtoComImposto}`);
}

//FIM