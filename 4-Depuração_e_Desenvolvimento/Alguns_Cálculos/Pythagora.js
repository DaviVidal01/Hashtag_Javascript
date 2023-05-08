function calcularRaizQuadrada(base){
    return base ** ( 1 / 2 );
}

function calcularPythagora(cat1,cat2){
    const sum = cat1 **2 + cat2 **2;
    return calcularPythagora (sum)
}

console.log(`O tamanho de uma Hipotenusa de um Triangulo Retângulo dos lados 3 e 4 é ${calcularPythagora(3,4)}`);
