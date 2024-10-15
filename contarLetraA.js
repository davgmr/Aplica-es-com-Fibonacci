function contarLetraA(texto) {
    let contador = 0;

    // Percorre cada caractere da string
    for (let char of texto) {
        // Converte o caractere para minúsculo e verifica se é 'a'
        if (char.toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}

// Defina a string que deseja analisar
let string = "Exemplo de String com várias letras A e a.";

let quantidade = contarLetraA(string);

if (quantidade > 0) {
    console.log(`A letra 'a' aparece ${quantidade} vezes na string.`);
} else {
    console.log("A letra 'a' não aparece na string.");
}
