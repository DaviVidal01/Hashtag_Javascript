function calculandoRaizQuadrada(base){
    return base ** ( 1 / 2 );
}

function calculandoPythagoras(ca1,ca2){
    const soma = (ca1 ** 2) + (ca2 ** 2);
    return calculandoRaizQuadrada(soma);
}

function add(part1, part2){
    return part1 + part2;
}

console.log(process.argv);

const userInputs = process.argv.splice(2);

const side1 = add( Number(userInputs[0]), Number(userInputs[1]) );
const side2 = add( Number(userInputs[2]), Number(userInputs[3]) );

console.log(`A hipotenusa de um triângulo de lados ${side1} e ${side2} é: ${calculandoPythagoras( side1, side2 )}`);