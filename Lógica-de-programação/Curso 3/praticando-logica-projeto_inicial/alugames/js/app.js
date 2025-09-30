function alterarStatus(id) {
    const card = document.getElementById(`game-${id}`);
    const botao = card.querySelector('.dashboard__item__button');
    const capa = card.querySelector('.dashboard__item__img');

    const alugado = botao.classList.toggle('dashboard__item__button--return');
    capa.classList.toggle('dashboard__item__img--rented', alugado);
    botao.textContent = alugado ? 'Devolver' : 'Alugar';

}