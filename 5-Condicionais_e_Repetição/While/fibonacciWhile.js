function calculateFibonacciTerm(termNumber){
    let lastTerm = 1;
    let secondToLast = 0;

    if(termNumber === 0){
        return 0;
    }
    //if (termNumber === 1){
    //    return 1;
    //}
    let currentIteration = 1;
    while(currentIteration <= termNumber) {
        let auxVar = lastTerm + secondToLast;
        secondToLast = lastTerm;
        lastTerm = auxVar;
        currentIteration++;
    }
    return lastTerm;
}

console.log(`O valor do termo numero 6 da sequência de Fibonacci é ${calculateFibonacciTerm(6)}`);