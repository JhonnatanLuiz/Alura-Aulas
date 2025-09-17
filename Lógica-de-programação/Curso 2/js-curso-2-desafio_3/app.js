// Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, 
// em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcularIMC(peso, altura) {
    if (peso<= 0 || altura <= 0) return NaN;
    return peso / (altura * altura);
}

function classificarIMC(imc) {
    if (isNaN(imc)) return 'Parâmetros inválidos';
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 25) return 'Peso normal';
    if (imc < 30) return 'Acima do peso';
    return 'Obesidade';
}

const peso = 85;
const altura = 1.75;

const imc = calcularIMC(peso, altura);
console.log('IMC: ' , imc.toFixed(2), classificarIMC(imc));

// Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(n) {
    if (!Number.isInteger(n) || n < 0) return NaN; // validação
    if (n === 0) return 1;
    return n * calcularFatorial(n - 1);
}

// Versão iterativa (sem recursão)
function calcularFatorialIterativo(n) {
    if (!Number.isInteger(n) || n < 0) return NaN;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log('Fatorial de 5 (recursivo):', calcularFatorial(5));
console.log('Fatorial de 5 (iterativo):', calcularFatorialIterativo(5));

// Crie uma função que converta  um valor em dólar, passado como parâmetro, e retorna o valor equivalente
// em reais. Para isso, considere a cotação dol dólar igual a R$ 4,80.
function converterDolarParaReal(valorDolar, cotacao = 4.80) {
    if (typeof valorDolar !== 'number' || valorDolar < 0) return NaN; // validação
    return valorDolar * cotacao;
}

const valor = 100;
const emReais = converterDolarParaReal(valor);
console.log(`USD ${valor} -> R$ ${emReais.toFixed(2)}`);

// Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, 
// utilizando altura e largura que serão dadas como parâmetro.
function mostrarAreaPerimetroSala(altura, largura) {
    if (altura <= 0 || largura <= 0) {
        alert('Valores inválidos.'); // mostra alerta para valores inválidos
        return;
    }
    const area = altura * largura;
    const perimetro = 2 * (altura + largura);
    const mensagem = `Área: ${area} m² | Perímetro: ${perimetro} m`;
    
    alert(mensagem); // mostra o resultado em um alerta
    exibir(mensagem); // opcional, se ainda quiser mostrar no HTML
}

function exibir(msg) {
    let el = document.getElementById('output');
    if (!el) {
        el = document.createElement('pre');
        el.id = 'output';
        document.body.appendChild(el);
    }
    el.textContent += msg + '\n';
}

mostrarAreaPerimetroSala(3, 5); // exemplo de chamada

const alturaSala = parseFloat(prompt('Altura da sala (m):'));
const larguraSala = parseFloat(prompt('Largura da sala (m):'));
mostrarAreaPerimetroSala(alturaSala, larguraSala);

// Crie uma função que mostre na tela a área e o perímetro de uma sala circular, 
// utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function Tabuada(numero) {
    if (!Number.isInteger(numero) || numero < 1 || numero > 10) {
        alert('Número inválido. Por favor, insira um número entre 1 e 10.');
        return;
    }
    let resultado = `Tabuada do ${numero}:\n`;
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}\n`;
    }
    alert(resultado);
}
const numTabuada = parseInt(prompt('Digite um número entre 1 e 10 para ver a tabuada:'));
Tabuada(numTabuada);

