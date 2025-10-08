let amigos = [];

function nomeExiste(nome) {
    // compara sem diferenciar maiúsculas/minúsculas e sem espaços extras
    const n = nome.trim().toLowerCase();
    return amigos.some(a => a.trim().toLowerCase() === n);
}

/**
 * Retorna true se o nome for válido.
 * Permite letras latinas (com acentos), espaços e hífen.
 * Bloqueia dígitos e caracteres especiais como , . ' " / \ @ # $ % etc.
 */
function nomeValido(nome) {
    // trim inicial
    const n = String(nome).trim();
    if (n.length === 0) return false;

    // regex: letras latinas (inclui acentos) + espaços + hífen
    const re = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]+$/u;
    return re.test(n);
}

function adicionar() {
    const input = document.getElementById('nome-amigo');
    const lista = document.getElementById('lista-amigos');
    if (!input) return;

    const nome = input.value.trim();
    if (nome === '') return; // não adiciona vazio

    // nova checagem: valida caracteres
    if (!nomeValido(nome)) {
        alert('Nome inválido. Use apenas letras, espaços e hifens (sem números ou caracteres especiais).');
        input.focus();
        return;
    }

    if (nomeExiste(nome)) {
        alert('Nome já adicionado.');
        input.value = '';
        input.focus();
        return;
    }

    amigos.push(nome);
    // sempre renderize a partir do array (fonte única)
    lista.textContent = amigos.join(', ');
    input.value = '';
    input.focus();
}

function sortear() {
    embaralha(amigos);
    const sorteio = document.getElementById('lista-sorteio');
    if (!sorteio) return;

    // limpa resultado anterior antes de gerar novo sorteio
    sorteio.innerHTML = '';

    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear.');
        return;
    }

    for (let i = 0; i < amigos.length; i++) {
        sorteio.innerHTML += amigos[i] + ' --> ' + amigos[(i + 1) % amigos.length] + '<br>';
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

// reiniciar o sorteio
function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
}


