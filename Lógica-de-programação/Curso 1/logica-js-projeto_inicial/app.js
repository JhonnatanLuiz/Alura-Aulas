alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1; // gera inteiro entre 1 e numeroMaximo (inclusive)
console.log(numeroSecreto);
let chute;
let tentativas = 0; // mudou de 3 para 0
let dica = ''; // <-- adicionada: armazena a dica para mostrar no prompt

// enquanto o chute for diferente do número secreto
do {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}\nTentativa ${tentativas + 1}\n${dica}`);
    chute = Number(chute); // converte para número para comparar corretamente

    if (Number.isNaN(chute) || chute < 1 || chute > numeroMaximo) {
        alert(`Entrada inválida. Digite um número entre 1 e ${numeroMaximo}.`);
        continue;
    }

    tentativas++; // conta esta tentativa (inclui a tentativa correta)

    if (chute == numeroSecreto) {      // <-- break agora conta a tentativa correta
        break;
    }

    if (chute > numeroSecreto) {
        alert(`O número secreto é menor que ${chute}`);
        dica = `Dica: o número secreto é menor que ${chute}`; // <-- atualiza dica
    } else {
        alert(`O número secreto é maior que ${chute}`);
        dica = `Dica: o número secreto é maior que ${chute}`; // <-- atualiza dica
    }
    alert('Você errou! Tente novamente');
} while (chute != numeroSecreto);
// se o chute for igual ao número secreto
if (chute == numeroSecreto) {
    // chute acertado — break já executado dentro do loop
} else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas ++;
    }
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'; // operador ternário
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
  //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}