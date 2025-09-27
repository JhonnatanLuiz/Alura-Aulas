function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if (de > ate) {
        alert('O valor "Do número" não pode ser maior que "Até o número". Verifique os dados informados.');
        return;
    }

    const intervaloDisponivel = (ate - de) + 1;
    if (quantidade > intervaloDisponivel) {
        alert('Quantidade solicitada maior que o total de números disponíveis no intervalo. Ajuste os valores.');
        return;
    }

    let sorteados = [];
    let numero;
    
    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
                alert('Tentando obter número inédito');
            }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
    alterarStatusBotao(true);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

function alterarStatusBotao(ativar = false) {
    let botao = document.getElementById('btn-reiniciar');
    botao.disabled = !ativar;
    botao.classList.toggle('container__botao-desabilitado', !ativar);
    botao.classList.toggle('container__botao', ativar);
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label> ';
    alterarStatusBotao(false);
}



// O que é Math.random()?
// Math.random() é uma função em JavaScript que retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusivo).
// Isso significa que o valor retornado pode ser 0, mas nunca será 1.
// A função é frequentemente usada para gerar números aleatórios dentro de um intervalo específico, como mostrado na função obterNumeroAleatorio(min, max) acima.
// A fórmula Math.floor(Math.random() * (max - min + 1)) + min é usada para ajustar o valor retornado por Math.random() para um intervalo desejado entre min e max, incluindo ambos os extremos.

// O que é Math.floor()?
// Math.floor() é uma função em JavaScript que arredonda um número para baixo, para o inteiro mais próximo.
// Por exemplo, Math.floor(4.7) retornará 4, e Math.floor(-4.7) retornará -5.
// Essa função é útil quando você precisa garantir que um número seja um inteiro, especialmente ao trabalhar com números aleatórios, como na função obterNumeroAleatorio(min, max) acima.