let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function consoleLog() {
    console.log('O botão foi clicado!');
}

function alertLog() {
    alert('Eu amo JS!');
}

function promptLog() {
    let nome = prompt('Qual é o nome da cidade?');
    console.log(`Estive em ${nome} e lembrei de você!`);
}

function soma() {
    let num1 = parseInt(prompt('Digite o primeiro número:'));
    let num2 = parseInt(prompt('Digite o segundo número:'));
    let resultado = num1 + num2;
    alert(`A soma de ${num1} e ${num2} é ${resultado}`);
}