const carrinho = [];

// util: parse do value do select "Nome - R$1000"
function parseProdutoValue(value) {
    const parts = value.split(' - ');
    const nome = parts[0].trim();
    const precoMatch = value.match(/R\$\s*([\d.,]+)/);
    let preco = 0;
    if (precoMatch) {
        // remove pontos de milhares e transforma vírgula em ponto (se houver)
        const cleaned = precoMatch[1].replace(/\./g, '').replace(',', '.');
        preco = parseFloat(cleaned) || 0;
    }
    return { nome, preco };
}

function formatCurrency(valor) {
    // formato simples: R$1400 ou R$1.400,00 (optei por R$1400 sem centavos)
    return `R$${Number(valor).toLocaleString('pt-BR', { maximumFractionDigits: 2, minimumFractionDigits: 0 })}`;
}

function encontrarIndiceProduto(nome) {
    return carrinho.findIndex(item => item.nome === nome);
}

function renderCart() {
    const lista = document.getElementById('lista-produtos');
    const totalEl = document.getElementById('valor-total');

    if (!lista || !totalEl) return;

    // limpa e reconstroi
    lista.innerHTML = '';

    if (carrinho.length === 0) {
        lista.innerHTML = '<p class="carrinho__produtos__vazio">Nenhum produto no carrinho</p>';
        totalEl.textContent = formatCurrency(0);
        return;
    }

    let total = 0;

    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade;

        const produtoEl = document.createElement('section');
        produtoEl.className = 'carrinho__produtos__produto';
        produtoEl.innerHTML = `
            <span class="texto-azul">${item.quantidade}x</span> ${item.nome} <span class="texto-azul">${formatCurrency(item.preco)}</span>
            <button type="button" onclick="removerItem(${index})" style="margin-left:12px; background:#01080E; color:#fff; border-radius:6px; padding:4px 8px; cursor:pointer;">Remover</button>
        `;
        lista.appendChild(produtoEl);
    });

    totalEl.textContent = formatCurrency(total);
}

// função chamada pelo botão "Adicionar"
function adicionar() {
    const select = document.getElementById('produto');
    const quantidadeInput = document.getElementById('quantidade');

    if (!select || !quantidadeInput) return;

    const valorSelect = select.value;
    const quantidadeRaw = Number(quantidadeInput.value);

    const quantidade = Number.isFinite(quantidadeRaw) && quantidadeRaw > 0 ? Math.floor(quantidadeRaw) : 1;

    const { nome, preco } = parseProdutoValue(valorSelect);

    const idx = encontrarIndiceProduto(nome);
    if (idx >= 0) {
        // já existe -> soma quantidade
        carrinho[idx].quantidade += quantidade;
    } else {
        carrinho.push({ nome, preco, quantidade });
    }

    renderCart();
    // opcional: limpar campo quantidade
    quantidadeInput.value = '';
}

// remove um item por índice
function removerItem(index) {
    if (index >= 0 && index < carrinho.length) {
        carrinho.splice(index, 1);
        renderCart();
    }
}

// limpa todo o carrinho
function limpar() {
    carrinho.length = 0;
    renderCart();

    // também limpa inputs do formulário
    const quantidadeInput = document.getElementById('quantidade');
    if (quantidadeInput) quantidadeInput.value = '';
}

// inicialização: se preferir começar com um item padrão, descomente e ajuste:
// carrinho.push({ nome: 'Celular', preco: 1400, quantidade: 1 });

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});
