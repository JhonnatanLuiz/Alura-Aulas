# Guia de Estudos: Git e GitHub

Este projeto é uma página estática para estudos de Git e GitHub com conteúdo didático, exemplos práticos, diagramas e exercícios interativos.

## Conteúdo e recursos

- Índice navegável com rolagem suave.
- Tema claro/escuro com persistência.
- Blocos de comandos com botão "Copiar".
- Seções didáticas:
  - Introdução, Instalação, Configuração inicial, Fluxo básico, Branches, Remotos, Colaboração, .gitignore, Desfazendo, Stash/Tags, Markdown, Estratégias, Problemas comuns, Cheat Sheet.
  - Git avançado: rebase interativo, cherry-pick, bisect.
  - Workflows com diagramas Mermaid: Git Flow, Trunk-based e Branching por release.
- Exercícios práticos com validação, dicas progressivas e solução:
  - Conventional Commits, Branch/Merge, Bisect, Stash, Rebase com conflitos, Reset vs Revert, Cherry-pick múltiplo.
- Realce de sintaxe (Highlight.js) com tema ajustado ao modo claro/escuro.

## Estrutura

```
Curso 1/
  git-github-projeto_inicial/
    index.html     # Página principal do guia
    style.css      # Estilos (responsivo, temas, componentes)
    app.js         # Interações (busca, copiar, tema, exercícios, mermaid/hljs)
    README.md      # Este documento
```

## Como executar

Abra o arquivo `index.html` no navegador.

### Modo online (CDN)

Sem dependências instaladas, a página usa CDNs para carregar Mermaid e Highlight.js automaticamente.

### Modo offline (local)

Para utilizar os assets locais (recomendado para ficar independente da internet):

1) Inicialize um `package.json` e instale dependências na pasta `git-github-projeto_inicial`:

```powershell
npm init -y
npm install mermaid highlight.js
```

2) Reabra o `index.html`. A página detecta automaticamente os arquivos em `node_modules/` e prioriza os assets locais; se não encontrar, faz fallback para a CDN.

Observação: Não é necessário servidor — é uma página estática. Se preferir, você pode usar um servidor simples (ex.: Live Server do VS Code) para recarregar automaticamente a cada edição.

## Exercícios e validações

- Cada exercício conta com campos de entrada e botão "Validar".
- Dicas progressivas: clique em "Mostrar dica" múltiplas vezes para revelar mais pistas.
- "Mostrar solução": exibe uma resposta sugerida com realce de sintaxe.
- Progresso salvo: entradas e estado (aprovado) são salvos no `localStorage` por exercício.

Tipos de validação (resumo):
- Conventional Commits: aceita `feat|fix|docs|chore|refactor|perf|style|test|build|ci` e formato `type(scope)?: desc`.
- Branch/Merge: aceita `git switch -c` ou `git checkout -b` para criar/trocar; `git merge <branch>` para integrar.
- Bisect: sequência mínima (`start`, `bad`, `good`, `reset`).
- Stash: `git stash`, `git stash list`, `git stash pop/apply`.
- Rebase com conflitos: `git rebase <base>`, `git add .`, `git rebase --continue`, opcional `--abort`.
- Reset vs Revert: `git revert <hash>`, e um `git reset --soft|--mixed|--hard <ref>`.
- Cherry-pick múltiplo: aceita múltiplos hashes em linha ou range (`a..b` ou `a...b`).

## Personalização

- Tema: O botão de tema alterna entre claro e escuro, e atualiza temas do Mermaid e Highlight.js.
- Estilo: Ajuste variáveis no `:root` e `.theme-dark` no `style.css`.
- Validações: Amplie regexes em `app.js` nas seções dos exercícios. É possível aceitar comandos adicionais equivalentes.
- Diagramas: Edite os blocos `<pre class="mermaid">` em `index.html`. O tema acompanha o modo do site.

## Solução de problemas

- Mermaid/Highlight não carregam: verifique se está online ou se `node_modules/` existe e contém `mermaid` e `highlight.js`.
- Tema não alterna: confirme que o `localStorage` não está bloqueado e que o botão "Tema" está visível no cabeçalho.
- Copiar comando não funciona: alguns navegadores exigem HTTPS ou interação do usuário; tente clicar novamente ou usar outro navegador.
- Regex muito rígida: ajuste as expressões em `app.js` (função de validação de cada exercício) para aceitar variações.

## Capturas de tela

Você pode adicionar imagens de exemplo (tema claro/escuro, diagramas e exercícios) na pasta `img/` (crie a pasta ao lado deste README, se não existir) e referenciá-las aqui:

```
git-github-projeto_inicial/
  img/
    home_light.png
    home_dark.png
```

Exemplo de inclusão no README:

![Página (tema claro)](./img/home_light.png)

![Página (tema escuro)](./img/home_dark.png)

Sugestão: capture a seção de exercícios validando um exemplo e a seção de Workflows exibindo os diagramas Mermaid.

## FAQ

1) Como rodar 100% offline?

Instale as dependências locais (na pasta `git-github-projeto_inicial`). A página prioriza assets locais e só usa CDN se os arquivos locais não estiverem presentes.

```powershell
npm init -y
npm install mermaid highlight.js
```

2) O botão "Copiar" não funcionou. Por quê?

Alguns navegadores bloqueiam o acesso à área de transferência sem interação direta ou exigem páginas servidas via HTTP/HTTPS. Clique novamente no botão ou use uma extensão como Live Server no VS Code.

3) Mermaid não renderiza os diagramas.

- Verifique o console do navegador (F12) para erros de rede; sem internet e sem `node_modules` o Mermaid não carrega.
- Confirme que os blocos estão dentro de `<pre class="mermaid"> ... </pre>`.
- O tema do Mermaid é ajustado automaticamente; alterne o tema para forçar re-inicialização.

4) O tema não alterna ou volta sozinho.

- A escolha fica em `localStorage`. Verifique se o navegador permite armazenamento local.
- Você pode limpar o tema salvo removendo a chave `theme` no `localStorage` (DevTools > Application > Local Storage).

5) Como limpar o progresso dos exercícios?

Abra o console do navegador (F12) e execute:

```js
Object.keys(localStorage)
  .filter(k => k.startsWith('ex-'))
  .forEach(k => localStorage.removeItem(k));
```

6) Posso usar `git checkout -b` em vez de `git switch -c`?

Sim. As validações aceitam ambas as formas no exercício de Branch/Merge.

7) Como adiciono um novo diagrama?

Insira um bloco como abaixo no `index.html` (em Workflows):

```html
<pre class="mermaid">flowchart LR
  A --> B
</pre>
```

8) Como flexibilizar as validações?

Altere as regex dos exercícios em `app.js` (procure por `ex1`, `ex2`, etc.). Você pode permitir variações adicionais como flags, opções curtas/longas e comandos equivalentes.

## Licença

Uso educacional. Você pode adaptar o conteúdo e reutilizar nos seus estudos.
