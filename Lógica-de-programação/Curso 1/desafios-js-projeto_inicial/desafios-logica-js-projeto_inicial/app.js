// Menu de seleção de desafios no navegador

function desafio1() {
    // 1. Dia da semana: final de semana x dia útil
    let dia = prompt("Qual é o dia da semana?").toLowerCase();
    if (dia === "sábado" || dia === "sabado" || dia === "domingo") {
        alert("Bom final de semana!");
    } else {
        alert("Boa semana!");
    }
}

function desafio2() {
    // 2. Número positivo ou negativo
    let numero = Number(prompt("Digite um número:"));
    if (numero >= 0) {
        alert("O número é positivo.");
    } else if (numero < 0) {
        alert("O número é negativo.");
    } else {
        alert("O número é zero.");
    }
}

function desafio3() {
    // 3. Sistema de pontuação
    let pontuacao = Number(prompt("Digite sua pontuação:"));
    if (pontuacao >= 100) {
        alert("Parabéns, você venceu!");
    } else {
        alert("Tente novamente para ganhar.");
    }
}

function desafio4() {
    // 4. Mensagem de saldo
    let saldo = Number(prompt("Digite o saldo da sua conta:"));
    alert(`Seu saldo atual é R$ ${saldo.toFixed(2)}.`);
}

function desafio5() {
    // 5. Boas-vindas com nome
    let nome = prompt("Digite seu nome:");
    alert(`Bem-vindo, ${nome}!`);
}

function desafio6() {
    // 6. Média de N números
    let qtdNumeros = Number(prompt('Digite a quantidade de números para o cálculo da média:'));
    let soma = 0;
    let contador = qtdNumeros;

    while (contador > 0) {
        const numero = Number(prompt('Digite o número:'));
        soma += numero;
        contador--; // decrementa para evitar loop infinito
    }

    const media = soma / qtdNumeros;
    console.log(media);
}

function desafio7() {
    // 7. Contador 1 até 10
    let contador2 = 1;
    while (contador2 <= 10) {
        console.log(contador2);
        contador2++;
    }
}

function desafio8() {
    // 8. Contagem regressiva
    let numero2 = Number(prompt("Digite um número para contagem regressiva:"));
    while (numero2 >= 0) {
        console.log(numero2);
        numero2--;
    }
}

function desafio9() {
    // 9. Contagem progressiva
    let numero3 = Number(prompt("Digite um número para contagem progressiva:"));
    let contador3 = 0;
    while (contador3 <= numero3) {
        console.log(contador3);
        contador3++;
    }
}

function desafio10() {
    // 10. Mensagem de boas-vindas no console
    console.log("Bem-vindo ao nosso programa!");
}

function desafio11() {
    // 11. Olá, [seu nome] no console
    const meuNome = "Jhonnatan";
    console.log(`Olá, ${meuNome}!`);
}

function desafio12() {
    // 12. Olá, [seu nome] com alert
    const meuNome2 = "Jhonnatan";
    alert(`Olá, ${meuNome2}!`);
}

function desafio13() {
    // 13. Prompt linguagem favorita e log no console
    const linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
    console.log(`A linguagem de programação que eu mais gosto é: ${linguagemFavorita}`);
}

function desafio14() {
    // 14. Soma de dois valores e log do resultado
    const valor1 = 5;
    const valor2 = 10;
    const resultado = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
}

function desafio15() {
    // 15. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
    // Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". 
    // Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
    const valor1 = 10;
    const valor2 = 5;
    const resultado = valor1 - valor2;
    console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
}

function desafio16() {
    // 16. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar 
    // se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
    const idade = Number(prompt("Digite sua idade:"));
    if (idade >= 18) {
        console.log("Você é maior de idade.");
    } else {
        console.log("Você é menor de idade.");
    }
}

function desafio17() {
    // 17. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
    // Use if-else para imprimir a respectiva mensagem.
    const numero = Number(prompt("Digite um número:"));
    if (numero > 0) {
        console.log("O número é positivo.");
    } else if (numero < 0) {
        console.log("O número é negativo.");
    } else {
        console.log("O número é zero.");
    }
}

function desafio18() {
    // 18. Use um loop while para imprimir os números de 1 a 10 no console.
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

function desafio19() {
    // 19. Crie uma variável "nota" e atribua um valor numérico a ela. 
    // Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
    const nota = 6;
    if (nota >= 7) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

function desafio20() {
    // 20. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
    const numeroAleatorio = Math.random();
    console.log(`Número aleatório gerado: ${numeroAleatorio}`);
}

function desafio21() {
    // 21. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    console.log(`Número aleatório gerado: ${numeroAleatorio}`);
}

function desafio22() {
    // 22. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
    const numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
    console.log(`Número aleatório gerado: ${numeroAleatorio}`);
}

// Mapeamento de número -> função
const desafios = {
    1: desafio1,
    2: desafio2,
    3: desafio3,
    4: desafio4,
    5: desafio5,
    6: desafio6,
    7: desafio7,
    8: desafio8,
    9: desafio9,
    10: desafio10,
    11: desafio11,
    12: desafio12,
    13: desafio13,
    14: desafio14,
    15: desafio15,
    16: desafio16,
    17: desafio17,
    18: desafio18,
    19: desafio19,
    20: desafio20,
    21: desafio21,
    22: desafio22,
};

function escolherDesafio() {
    const total = Object.keys(desafios).length;
    while (true) {
        const entrada = prompt(`Digite o número do desafio (1-${total}) ou clique em Cancelar para sair:`);
        if (entrada === null) break;

        const n = Number(entrada);
        if (!Number.isInteger(n) || !(n in desafios)) {
            alert("Entrada inválida. Tente novamente.");
            continue;
        }

        try {
            desafios[n]();
        } catch (e) {
            console.error(e);
            alert("Ocorreu um erro ao executar o desafio.");
        }
    }
}

// Inicia o menu
escolherDesafio();