const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularDescontoTotal(quantidadeDeJogos) {
  let desconto = 0;
  let i = 0;

  while (i < quantidadeDeJogos) {
    if (quantidadeDeJogos >= 10) {
      desconto += 0.2 * 50;
    } else if (quantidadeDeJogos >= 5) {
      desconto += 0.1 * 50;
    }
    i++;
  }

  return desconto;
}

rl.question("Quantos jogos você comprou? ", (resposta) => {
  const quantidadeDeJogos = parseInt(resposta);

  if (isNaN(quantidadeDeJogos) || quantidadeDeJogos < 0) {
    console.log("❌ Entrada inválida. Digite um número positivo.");
  } else {
    const descontoFinal = calcularDescontoTotal(quantidadeDeJogos);
    console.log(`💸 Desconto total: R$ ${descontoFinal.toFixed(2)}`);
  }

  rl.close();
});
