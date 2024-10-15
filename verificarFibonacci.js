function isFibonacci(num) {
    let a = 0;
    let b = 1;

    if (num === 0 || num === 1) {
        return true;
    }

    let c = a + b;

    while (c <= num) {
        if (c === num) {
            return true;
        }
        a = b;
        b = c;
        c = a + b;
    }

    return false;
}

let numero = 21; // Número que deseja verificar

if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
