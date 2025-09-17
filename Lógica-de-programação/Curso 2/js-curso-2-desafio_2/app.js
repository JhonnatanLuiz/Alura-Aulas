// Variável global contendo uma mensagem qualquer.
let nome = "Olá, mundo!";

// Função sem parâmetros que somente exibe o valor da variável `nome`.
// Uso: chama `mostrarNome()` e a função imprime a variável global no console.
function mostrarNome() {
  console.log(nome);
}

mostrarNome(); // Exemplo: imprimirá "Olá, mundo!"

// Função que recebe um nome como parâmetro e exibe "Olá, [nome]!".
// Parâmetros:
// - nome (string): o nome da pessoa a ser cumprimentada.
// Retorno: nenhum (a função apenas imprime no console).
// Exemplo: `cumprimentar('Jhonnatan')` imprimirá "Olá, Jhonnatan!".
function cumprimentar(nome) {
  console.log(`Olá, ${nome}!`);
}

// Exemplos de uso da função `cumprimentar`:
cumprimentar('Jhonnatan'); // Imprime: Olá, Jhonnatan!
cumprimentar('Luiz');      // Imprime: Olá, Luiz!

// Função que recebe um número e retorna o dobro desse número.
// Parâmetros:
// - numero (number): valor a ser dobrado.
// Retorno:
// - (number) resultado da multiplicação por 2.
// Exemplo: `dobro(5)` retorna 10.
function dobro(numero) {
    return numero * 2;
}

// Chamadas de exemplo para `dobro`:
console.log(dobro(5));  // Saída: 10
console.log(dobro(10)); // Saída: 20

// Função que calcula a média aritmética de três números.
// Parâmetros:
// - n1, n2, n3 (number): as três notas/valores.
// Retorno:
// - (number) média dos três valores.
// Exemplo: `calcularMedia(7, 8, 9)` retorna 8.
function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(calcularMedia(7, 8, 9)); // Saída: 8

// Função que retorna o maior entre dois números.
// Parâmetros:
// - n1, n2 (number): os valores a comparar.
// Retorno:
// - (number) o maior dos dois valores (se forem iguais, retorna o segundo).
// Exemplo: `numeroMaior(10, 5)` retorna 10.
function numeroMaior(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}

console.log(numeroMaior(10, 5)); // Saída: 10
console.log(numeroMaior(8, 3));  // Saída: 8
console.log(numeroMaior(2, 4));  // Saída: 4

// Função que recebe um número e retorna o resultado da multiplicação
// desse número por ele mesmo (ou seja, retorna o quadrado).
// Parâmetros:
// - numero (number): valor a ser elevado ao quadrado.
// Retorno:
// - (number) o quadrado do número.
// Exemplo: `quadrado(4)` retorna 16.
function quadrado(numero) {
    return numero * numero;
}

console.log(quadrado(4)); // Saída: 16
console.log(quadrado(7)); // Saída: 49