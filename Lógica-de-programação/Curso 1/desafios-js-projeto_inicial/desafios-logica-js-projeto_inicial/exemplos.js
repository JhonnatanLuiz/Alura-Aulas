// Explicação sobre operadores lógicos e de comparação usados:
// AND (&&): Usado para combinar múltiplas condições que todas devem ser verdadeiras.
// OR (||): Usado para combinar múltiplas condições onde pelo menos uma deve ser verdadeira.
// NOT (!): Usado para inverter o valor booleano de uma condição.

// Exemplos de operadores lógicos (&&, ||, !)
(() => {
  // AND (&&): ambas as condições devem ser verdadeiras
  const idade = 20;
  const temIngresso = true;
  console.log('AND:', idade >= 18 && temIngresso); // true

  // OR (||): pelo menos uma condição verdadeira
  const temCarteira = false;
  const acompanhado = true;
  console.log('OR:', temCarteira || acompanhado); // true

  // NOT (!): inverte o booleano
  const logado = false;
  console.log('NOT:', !logado); // true

  // Combinação com comparações
  const nota = 7.5;
  const faltas = 2;
  const aprovado = (nota >= 7) && (faltas <= 5);
  console.log('Aprovado:', aprovado); // true

  // Curto-circuito (short-circuit)
  console.log('' || 'padrão');       // 'padrão' (primeiro truthy)
  console.log('valor' || 'padrão');  // 'valor'
  console.log(0 && 'não chega');     // 0 (primeiro falsy)
  console.log(true && 'ok');         // 'ok'
})();

// ---------- Exemplo didático: `const` vs `let` ----------
// Objetivo: mostrar diferenças de reatribuição, mutação, escopo de bloco e TDZ (Temporal Dead Zone).
(() => {
  console.log('\n--- Exemplo didático: const vs let ---');

  // 1) Reatribuição
  let a = 1;
  console.log('let a inicial:', a);
  a = 2; // ok: let permite reatribuição
  console.log('let a após reatribuir:', a);

  const b = 1;
  console.log('const b inicial:', b);
  try {
    // b = 2; // se descomentar, lança TypeError: Assignment to constant variable.
    console.log('const b não pode ser reatribuído (descomente a atribuição para ver o erro)');
  } catch (err) {
    console.error('Erro ao reatribuir const b:', err.message);
  }

  // 2) Mutação de objetos/arrays com const
  const arr = [1, 2];
  console.log('arr inicial (const):', arr);
  arr.push(3); // mutação permitida: alteramos o conteúdo do array
  console.log('arr após push:', arr);
  try {
    // arr = []; // erro se descomentar: não é possível reatribuir a referência
    console.log('Não é possível reatribuir a referência de uma const (descomente arr = [] para testar)');
  } catch (err) {
    console.error(err.message);
  }

  // 3) Escopo de bloco
  if (true) {
    let blocoLet = 'sou do bloco';
    const blocoConst = 'também sou do bloco';
    console.log('dentro do bloco:', blocoLet, blocoConst);
  }
  try {
    console.log('fora do bloco blocoLet:', blocoLet); // ReferenceError
  } catch (err) {
    console.log('fora do bloco blocoLet: não existe (escopo de bloco)');
  }

  // 4) Temporal Dead Zone (TDZ)
  try {
    console.log('acessando antes da declaração (TDZ):', tempo); // ReferenceError
  } catch (err) {
    console.log('TDZ: não é possível acessar variável declarada com let/const antes da inicialização');
  }
  let tempo = 5; // se trocar para var, não haveria TDZ
  console.log('depois da declaração tempo =', tempo);

  // Boas práticas rápidas
  console.log('\nBoas práticas: use const por padrão; mude para let quando precisar reatribuir.');
})();

// ---------- Exemplos: Math.random() ----------
// Objetivo: mostrar usos comuns: 0..1, intervalos com float, inteiros inclusive/exclusive, sorteio e embaralhamento.
(() => {
  console.log('\n--- Exemplos: Math.random() ---');

  // 1) Valor aleatório entre 0 (inclusive) e 1 (exclusive)
  console.log('0 <= Math.random() < 1:', Math.random());

  // 2) Float em um intervalo [min, max) -> inclusive min, exclusive max
  function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  console.log('randomFloat(1, 5):', randomFloat(1, 5));

  // 3) Inteiro em [min, max] (inclusive)
  function randomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log('randomIntInclusive(1, 6):', randomIntInclusive(1, 6)); // exemplo: dado

  // 4) Inteiro em [min, max) (max exclusive)
  function randomIntExclusive(max) {
    return Math.floor(Math.random() * max);
  }
  console.log('randomIntExclusive(5):', randomIntExclusive(5)); // 0..4

  // 5) Escolher aleatoriamente um elemento de um array
  function choice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  console.log('choice(["maçã","banana","pera"]):', choice(['maçã','banana','pera']));

  // 6) Embaralhar um array (Fisher–Yates)
  function shuffle(array) {
    const a = array.slice(); // copia para não mutar original
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  console.log('shuffle([1,2,3,4,5]):', shuffle([1,2,3,4,5]));

  // Nota: Math.random() não é criptograficamente seguro — use Web Crypto API para segurança.
  console.log('Nota: para segurança/criptografia use crypto.getRandomValues in browsers.');
})();

// ---------- Exemplos: operador ternário (condição ? expr1 : expr2) ----------
(() => {
  console.log('\n--- Exemplos: Operador Ternário ---');

  // Forma básica
  const idade = 18;
  const acesso = idade >= 18 ? 'permitido' : 'negado';
  console.log('idade', idade, '=> acesso', acesso);

  // Uso inline em template string
  const nota = 7.5;
  console.log(`Aluno ${nota >= 7 ? 'aprovado' : 'reprovado'} (nota: ${nota})`);

  // Ternário aninhado (usar com cautela — pode reduzir legibilidade)
  const temperatura = 30;
  const estado = temperatura > 30 ? 'quente' : (temperatura >= 20 ? 'agradável' : 'frio');
  console.log('temperatura', temperatura, '=>', estado);

  // Substitui um if simples para atribuição
  let mensagem;
  // versão if
  if (nota >= 7) {
    mensagem = 'Parabéns!';
  } else {
    mensagem = 'Estude mais.';
  }
  console.log('mensagem (if):', mensagem);

  // versão ternária (mais concisa)
  const mensagem2 = nota >= 7 ? 'Parabéns!' : 'Estude mais.';
  console.log('mensagem (ternário):', mensagem2);

  // Refatoração pedida: singular/plural com operador ternário
  const quantidadePessoas = 1; // ajuste para testar com outros valores
  const palavraPessoa = quantidadePessoas === 1 ? 'pessoa' : 'pessoas';
  console.log(`${quantidadePessoas} ${palavraPessoa}`);

  // Atenção: não use o ternário para executar múltiplas instruções — preferir if/else
  console.log('\nDica: use ternário para expressões simples; para lógica complexa prefira if/else.');
})();

