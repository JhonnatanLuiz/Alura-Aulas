# Game JS — Aula 3 / Lesson 3

[Português](#português) • [English](#english)

---

## Português

### 📌 Resumo
Jogo do número secreto (versão Aula 3) com evolução em relação às aulas anteriores: evita repetir números já sorteados, mantém histórico interno, controla tentativas, atualiza mensagens dinamicamente e realiza reset limpo através de função dedicada. O botão "Novo Jogo" só aparece (ou habilita) quando faz sentido dentro do estado atual.

### 🎯 Objetivos de Aprendizado
- Manipular DOM (`querySelector`, `innerHTML`, `textContent`)
- Gerar números aleatórios e controlar faixa (`Math.random`, arredondamento)
- Fluxo condicional: `if / else`, operador ternário
- Controle de estado: tentativas, número sorteado, lista de usados
- Arrays: `includes`, `push`, comprimento, reinicialização
- Funções utilitárias vs. funções com efeitos colaterais (DOM)
- Separação de responsabilidades (exibir mensagem vs. lógica do jogo)

### 🧠 Conceitos e Decisões
- Prevenção de repetição: reforço de aleatoriedade sem frustração para o usuário
- Recursão simples para obter novo número quando há colisão (alternativa: laço `while`)
- Função central de reset garante consistência de estado
- Mensagens são sempre renderizadas via uma função única → facilita mudança futura (ex.: internacionalização)

### 🕹️ Regras do Jogo
1. O sistema sorteia um número secreto dentro de uma faixa (ex.: 1–10)
2. O usuário digita um palpite e confirma
3. O jogo responde: maior, menor ou acerto
4. Ao acertar: mostra total de tentativas e habilita opção de reinício
5. Nenhum número é sorteado duas vezes até esgotar o conjunto (quando aplicável)

### 📂 Estrutura Simplificada
```
index.html    # Estrutura da interface
style.css     # Estilos básicos
app.js        # Lógica do jogo (estado + DOM)
img/          # Recursos visuais
```

### 🔁 Fluxo Principal (pseudo)
```
iniciarJogo():
	gerarNumeroSecreto()
	exibirMensagemInicial()

aoChutar():
	lerValorInput()
	validarFaixa()
	compararComSecreto()
	atualizarTentativas()
	exibirFeedback()
	se acertou -> mostrar botão novo jogo

reiniciarJogo():
	limparInput()
	resetarEstado()
	gerarNovoNumero()
	exibirMensagemInicial()
```

### ✨ Destaques de Código (conceitual)
```js
function exibirTextoNaTela(tag, texto) { document.querySelector(tag).innerHTML = texto; }

function gerarNumeroSecreto() {
	const numero = parseInt(Math.random() * limite + 1);
	if (listaUsados.includes(numero)) return gerarNumeroSecreto();
	listaUsados.push(numero);
	return numero;
}
```

### ▶️ Como Executar
1. Abrir `index.html` diretamente no navegador OU com extensão Live Server
2. Inserir palpites no campo numérico
3. Utilizar o botão de ação (ex.: "Chutar")
4. Ao acertar, acionar "Novo Jogo" para reiniciar

### 🛠️ Personalizações Rápidas
- Alterar faixa máxima: ajustar variável `limite`
- Mudar textos: centralizar strings de mensagens em objeto
- Prevenir input inválido: adicionar `min`/`max` no `<input>` ou validação extra

### 🗣️ Integração de Voz (ResponsiveVoice)
Implementado de forma direta dentro da função `exibirTextoNaTela`. Cada mensagem exibida também é falada em voz PT-BR feminina com velocidade levemente aumentada (`rate: 1.2`). Isso reforça o feedback auditivo sem necessidade de código extra em cada ponto do jogo.

```js
function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}
```

Características do que foi aprendido/adicionado:
- Centralização: a chamada de voz fica em um único lugar (DRY)
- Consistência: qualquer alteração de voz ou velocidade exige mudança só nessa função
- Ritmo: o `rate: 1.2` deixa a fala mais dinâmica sem perder clareza
- Experiência: feedback multimodal (visual + auditivo)

Possíveis melhorias futuras (não implementadas ainda):
- Botão para ativar/desativar narração
- Suporte a inglês com troca de voz condicional
- Evitar repetir leitura quando mensagem não mudou

### �🔮 Próximos Passos (Roadmap)
- Desabilitar input após acerto (reabilitar no reset)
- Exibir contador visual persistente na interface
- Permitir escolher limite via seletor (ex.: 10 / 50 / 100)
- Alternar tema (claro/escuro) para acessibilidade
- Adicionar animação de feedback (acerto / erro)
- Implementar testes unitários de funções puras

### 🐞 Troubleshooting
- Input não responde: verifique se `app.js` está referenciado ao final do `body`
- Número parece repetir: confirmar se a lista é resetada em `reiniciarJogo()`
- Mensagem não muda: checar seletor usado em `exibirTextoNaTela`

### 🗓️ Changelog
- Aula 3: prevenção de repetição, histórico interno, reset completo, mensagens dinâmicas refinadas.

---

## English

### 📌 Overview
Secret number game (Lesson 3 version) improving earlier iterations: prevents repeated draws, tracks used numbers, manages attempt count, updates feedback dynamically, and performs a clean reset through a dedicated function. The "New Game" button only appears or enables when logically appropriate.

### 🎯 Learning Goals
- DOM manipulation (`querySelector`, `innerHTML`, `textContent`)
- Random number generation with range control (`Math.random`)
- Conditional logic: `if / else`, ternary operator
- State handling: attempts, secret number, used numbers list
- Array operations: `includes`, `push`, length, reset
- Utility vs. side-effect (DOM) functions separation
- Single rendering function pattern (future i18n ready)

### 🧠 Concepts & Decisions
- Repetition prevention reduces frustration and improves fairness
- Simple recursion to avoid collision (alternative: `while` loop)
- Central reset function = consistent state restoration
- All UI messages funneled through a single helper → easier refactor

### 🕹️ Game Rules
1. System picks a secret number within a range (e.g., 1–10)
2. User enters a guess and submits
3. Game answers: higher, lower, or correct
4. On success: shows attempt count and enables restart
5. No number is re-used until the set is exhausted (where applicable)

### 📂 File Layout
```
index.html    # UI structure
style.css     # Basic styles
app.js        # Game logic (state + DOM)
img/          # Visual assets
```

### 🔁 Core Flow (pseudo)
```
startGame():
	pickSecretNumber()
	renderInitialMessage()

onGuess():
	readInput()
	validateRange()
	compareWithSecret()
	incrementAttempts()
	renderFeedback()
	if correct -> show new game button

restartGame():
	clearInput()
	resetState()
	pickNewSecret()
	renderInitialMessage()
```

### ✨ Code Highlights (conceptual)
```js
function render(tag, text) { document.querySelector(tag).innerHTML = text; }

function pickSecretNumber() {
	const number = parseInt(Math.random() * limit + 1);
	if (used.includes(number)) return pickSecretNumber();
	used.push(number);
	return number;
}
```

### ▶️ How to Run
1. Open `index.html` directly or via Live Server
2. Enter guesses in the numeric input
3. Click the action button (e.g., "Chutar" / Guess)
4. On success, click "Novo Jogo" / New Game

### 🛠️ Quick Customization Ideas
- Change range: tweak `limit`
- Externalize messages: store in a `messages` object
- Guard invalid input: add `<input min="1" max="N">` or extra checks

### 🗣️ Voice Integration (ResponsiveVoice)
Implemented directly inside the rendering helper so every message is also spoken in Brazilian Portuguese with a slightly faster rate (`1.2`). This keeps the code DRY and ensures consistent audio feedback.

```js
function exibirTextoNaTela(tag, texto) {
  const el = document.querySelector(tag);
  el.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}
```

Learned / Added:
- Centralized speech call (single responsibility)
- Adjustable speed to improve pacing
- Multimodal feedback (visual + audio)

Potential future improvements (not implemented):
- Toggle to enable/disable narration
- English voice selection based on context
- Skip speaking if message unchanged

### 🔮 Roadmap (Next Steps)
- Disable input after correct guess (re-enable on reset)
- Persistent visual attempt counter
- Configurable range selector (10 / 50 / 100)
- Theme toggle (light/dark)
- Animated feedback states
- Unit tests for pure logic

### 🐞 Troubleshooting
- Input inert: ensure `app.js` is loaded after DOM
- Duplicate number suspicion: confirm reset clears used list
- Message not updating: verify selector in rendering helper

### 🗓️ Changelog
- Lesson 3: repetition prevention, internal history, full reset, refined dynamic messages.

---

Sinta-se à vontade para sugerir melhorias ou abrir um PR futuramente! / Feel free to iterate further or open a PR.
