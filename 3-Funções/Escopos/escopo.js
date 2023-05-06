const primeiraVariavelDoCodigo = 'Texto Inicial'

function printToConsole(){
    const primeiraVariavelDoCodigo = 'Segundo Texto';
    function secundFunction(){
        //const primeiraVariavelDoCodigo = 'Terceiro Texto';
        console.log(primeiraVariavelDoCodigo);
    }
    console.log(primeiraVariavelDoCodigo);
    secundFunction();
}

printToConsole();

//A Função pegará as informações atribuídas da variável a partir da "Função Pai"
//Dentro das funções é possível alterar a variável "Const" mas fora delas o const permanete global