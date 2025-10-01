function alterarStatus(id) {
    const card = document.getElementById(`game-${id}`);
    const botao = card.querySelector('.dashboard__item__button');
    const capa = card.querySelector('.dashboard__item__img');

    const estaAlugado = botao.classList.contains('dashboard__item__button--return');

    if (estaAlugado) {
        const nomeJogo = card.querySelector('.dashboard__item__name')?.textContent ?? 'este jogo';
        const confirmacao = window.confirm(`Tem certeza de que deseja devolver ${nomeJogo}?`);

        if (!confirmacao) {
            return;
        }
    }

    const alugado = botao.classList.toggle('dashboard__item__button--return');
    capa.classList.toggle('dashboard__item__img--rented', alugado);
    botao.textContent = alugado ? 'Devolver' : 'Alugar';

    imprimirTotalJogosAlugados();
}

function imprimirTotalJogosAlugados() {
    const jogosAlugados = document.querySelectorAll('.dashboard__item__button--return').length;
    const mensagem = jogosAlugados === 1 ? '1 jogo alugado' : `${jogosAlugados} jogos alugados`;

    console.log(`Atualmente ${mensagem}.`);
}
