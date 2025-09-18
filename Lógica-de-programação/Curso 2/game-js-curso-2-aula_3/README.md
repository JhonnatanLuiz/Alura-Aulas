# Game JS — Aula 3 / Lesson 3

[Português](#português) • [English](#english)

## Português

### Resumo
Jogo do número secreto com melhorias: histórico de números já sorteados, bloqueio de repetição e reset automático. Interface dinâmica com mensagens de feedback e botão de "Novo Jogo" controlado por estado.

### Objetivos de Aprendizado
- Manipular DOM com `querySelector` e `innerHTML`
- Gerar números aleatórios com `Math.random`
- Estruturas de decisão (`if/else`) e operadores ternários
- Controle de estado (tentativas, bloqueio de repetição, habilitar/desabilitar botão)
- Arrays em JS: `includes`, `push`, tamanho e reset
- Funções puras vs. funções com efeitos colaterais (DOM)

### Conteúdos Abordados
- Exibição de mensagens (`exibirTextoNaTela`) e mensagem inicial
- Validação do chute e dicas "maior/menor"
- Contagem de tentativas
- Lista de números sorteados e uso de recursão para evitar repetição
- Função de reset completo do jogo (`reiniciarJogo`)

### Como Executar
- Abra `index.html` no navegador (ou via Live Server)
- Interaja pelo input numérico e pelos botões "Chutar" e "Novo Jogo"

### Próximos Passos
- Desabilitar o input após acerto e reabilitar no reset
- Contador visual de tentativas na tela
- Permitir escolher o limite do número (ex.: 1–100)

## English

### Overview
Secret number game with improvements: history of previously drawn numbers, repetition blocking, and automatic reset. Dynamic UI with feedback messages and a state-controlled "New Game" button.

### Learning Goals
- Manipulate the DOM with `querySelector` and `innerHTML`
- Generate random numbers using `Math.random`
- Decision structures (`if/else`) and ternary operator
- State management (attempts, repetition blocking, enabling/disabling button)
- Arrays in JS: `includes`, `push`, length and reset
- Pure functions vs. side-effect functions (DOM)

### Topics Covered
- Message rendering (`exibirTextoNaTela`) and initial message
- Guess validation and "higher/lower" hints
- Attempt counting
- List of drawn numbers and recursion to avoid repetition
- Full game reset function (`reiniciarJogo`)

### How to Run
- Open `index.html` in your browser (or via Live Server)
- Use the numeric input and the "Chutar"/"Novo Jogo" buttons

### Next Steps
- Disable the input after a correct guess and re-enable on reset
- Show a visual attempt counter
- Allow configuring the number limit (e.g., 1–100)
