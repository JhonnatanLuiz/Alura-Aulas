# Guia de Estudos: Git e GitHub / Git & GitHub Study Guide

Este projeto é uma página estática para estudos de Git e GitHub com conteúdo didático, exemplos práticos, diagramas e exercícios interativos.

This project is a static study page for Git and GitHub featuring educational content, practical examples, diagrams, and interactive exercises.

## Conteúdo e recursos (PT)

- Índice navegável com rolagem suave.
- Tema claro/escuro com persistência.
- Blocos de comandos com botão "Copiar".
- Seções didáticas:
  - Introdução, Instalação, Configuração inicial, Fluxo básico, Branches, Remotos, Colaboração, .gitignore, **Working Tree e Staging Area**, Desfazendo, Stash/Tags, **GitHub Releases**, Markdown, Estratégias, Problemas comuns, Cheat Sheet.
  - **Working Tree e Staging Area**: explicação detalhada dos três estados do Git com diagrama interativo.
  - **Stash completo**: git stash, list, pop, apply, drop, clear com explicações sobre diferenças entre pop vs apply.
  - **Tags completo**: Tags simples vs anotadas, git tag -v para ver autor/data, versionamento semântico (SemVer), boas práticas.
  - **GitHub Releases**: Como criar releases baseadas em tags, anexar arquivos binários, notas de lançamento, automação com GitHub CLI e Actions.
  - Git avançado: rebase interativo, cherry-pick, bisect.
  - Workflows com diagramas Mermaid: Git Flow, Trunk-based e Branching por release.
- Exercícios práticos com validação, dicas progressivas e solução:
  - Conventional Commits, Branch/Merge, Bisect, **Stash (6 comandos completos)**, Rebase com conflitos, Reset vs Revert, Cherry-pick múltiplo.
- Realce de sintaxe (Highlight.js) com tema ajustado ao modo claro/escuro.

## Content and features (EN)

- Navigable table of contents with smooth scrolling.
- Light/dark theme with persistence.
- Command blocks with "Copy" button.
- Learning sections:
  - Introduction, Install, Initial config, Basic workflow, Branches, Remotes, Collaboration, .gitignore, **Working Tree & Staging Area**, Undoing, Stash/Tags, **GitHub Releases**, Markdown, Strategies, Common issues, Cheat Sheet.
  - **Working Tree & Staging Area**: detailed explanation of Git's three states with interactive diagram.
  - **Complete Stash**: git stash, list, pop, apply, drop, clear with explanations on pop vs apply differences.
  - **Complete Tags**: Lightweight vs annotated tags, git tag -v to view author/date, semantic versioning (SemVer), best practices.
  - **GitHub Releases**: How to create releases from tags, attach binary files, release notes, automation with GitHub CLI and Actions.
  - Advanced Git: interactive rebase, cherry-pick, bisect.
  - Workflows with Mermaid diagrams: Git Flow, Trunk‑based, Release branching.
- Interactive exercises with validation, progressive hints, and solutions:
  - Conventional Commits, Branch/Merge, Bisect, **Stash (6 complete commands)**, Rebase with conflicts, Reset vs Revert, Multi cherry-pick.
- Syntax highlighting (Highlight.js) respecting the selected theme.

## Estrutura / Structure

```
Curso 1/
  git-github-projeto_inicial/
    index.html     # Página principal do guia / Main guide page
    style.css      # Estilos (responsivo, temas, componentes) / Styles
    app.js         # Interações (busca, copiar, tema, exercícios, mermaid/hljs) / Interactions
    README.md      # Este documento / This document
```

## Como executar (PT) / How to run (EN)

Abra o arquivo `index.html` no navegador. / Open `index.html` in your browser.

### Modo online (CDN) / Online mode (CDN)

Sem dependências instaladas, a página usa CDNs para carregar Mermaid e Highlight.js automaticamente. / Without local dependencies, the page loads Mermaid and Highlight.js from CDNs.

### Modo offline (local) / Offline mode (local)

Para utilizar os assets locais (independente da internet), instale as dependências em `git-github-projeto_inicial`: / To use local assets (work offline), install dependencies in `git-github-projeto_inicial`:

```powershell
npm init -y
npm install mermaid highlight.js
```

Reabra `index.html`. O projeto tenta usar assets de `node_modules/` e faz fallback para a CDN se não encontrar. / Reopen `index.html`. The project prefers `node_modules/` assets and falls back to CDN if missing.

Observação: Não é necessário servidor. Opcionalmente, use Live Server no VS Code para recarregar a cada edição. / No server required; Live Server is optional.

## Exercícios e validações (PT) / Exercises and validation (EN)

- Campos de entrada e botão "Validar". / Input fields and a "Validate" button.
- Dicas progressivas e "Mostrar solução" com highlight. / Progressive hints and "Show solution" with highlighting.
- Progresso salvo por exercício em `localStorage`. / Progress saved per exercise in `localStorage`.

Resumo de validações / Validation summary:
- Conventional Commits: `feat|fix|docs|chore|refactor|perf|style|test|build|ci` e `type(scope)?: desc`.
- Branch/Merge: `git switch -c` ou `git checkout -b`; `git merge <branch>`.
- Bisect: `start`, `bad`, `good`, `reset`.
- Stash (completo): `git stash`, `git stash list`, `git stash pop`, `git stash apply`, `git stash drop`, `git stash clear`.
- Rebase conflitos: `git rebase <base>`, `git add .`, `git rebase --continue`, opcional `--abort`.
- Reset vs Revert: `git revert <hash>`, `git reset --soft|--mixed|--hard <ref>`.
- Cherry-pick múltiplo: múltiplos hashes ou range `a..b`/`a...b`.

## Personalização (PT) / Customization (EN)

- Tema: alternância claro/escuro que também ajusta Mermaid e Highlight.js. / Theme toggle that also updates Mermaid and HLJS.
- Estilos: edite variáveis no `:root` e `.theme-dark` em `style.css`. / Tweak CSS variables in `style.css`.
- Validações: ajuste regexes no `app.js`. / Tweak exercise regexes in `app.js`.
- Diagramas: edite blocos `<pre class="mermaid">` no `index.html`. / Edit `<pre class="mermaid">` blocks.

## Gist e compartilhamento de códigos (PT) / Gists and code sharing (EN)

GitHub Gist facilita compartilhar trechos de código e notas. / GitHub Gist makes sharing snippets and notes easy.

Criar (Web) / Create (Web):
1. https://gist.github.com
2. Descrição, arquivos com extensão e conteúdo. / Description, files with extensions, content.
3. Público ou Secreto. / Public or Secret.

Criar (GitHub CLI) / Create (GitHub CLI):

```powershell
# Público / Public
gh gist create caminho/arquivo.txt --public --desc "Minha anotação"

# Secreto com múltiplos arquivos / Private with multiple files
gh gist create a.js b.js --private --desc "Snippets variados"
```

Compartilhar / Share:
- Link do Gist: URL principal. / Gist link: main URL.
- Raw: clique em Raw no arquivo. / Raw file link.
- Permalinks: use a aba Revisions. / Use Revisions for immutable links.
- Embed HTML: use a tag `<script>`. / Use the `<script>` embed.

```html
<script src="https://gist.github.com/usuario/abc123.js"></script>
```

Markdown (fenced code):

````md
```js
function soma(a, b) { return a + b }
```
````

## Solução de problemas (PT) / Troubleshooting (EN)

- Mermaid/Highlight não carregam: verifique internet ou `node_modules/`. / Check internet or `node_modules/`.
- Tema não alterna: confirme `localStorage` e o botão de tema. / Ensure `localStorage` and theme button.
- Copiar não funciona: alguns navegadores exigem HTTPS; tente novamente ou outro navegador. / Some browsers require HTTPS.
- Regex rígida: ajuste em `app.js`. / Loosen regex in `app.js`.

## Capturas de tela (PT) / Screenshots (EN)

Adicione imagens em `img/` e referencie aqui. / Add images under `img/` and reference here.

```
git-github-projeto_inicial/
  img/
    home_light.png
    home_dark.png
```

![Página (tema claro)](./img/home_light.png)

![Página (tema escuro)](./img/home_dark.png)

## FAQ

1) Offline?

```powershell
npm init -y
npm install mermaid highlight.js
```

2) Botão "Copiar" não funciona? / Copy button not working?

Pode exigir HTTPS ou interação adicional. / May require HTTPS or user interaction.

3) Mermaid não renderiza? / Mermaid not rendering?

Cheque o console (F12), confirme `<pre class="mermaid">` e alterne o tema para reinicializar. / Check console, blocks, and toggle theme.

4) Limpar progresso dos exercícios? / Clear exercise progress?

```js
Object.keys(localStorage)
  .filter(k => k.startsWith('ex-'))
  .forEach(k => localStorage.removeItem(k));
```

## Licença / License

Uso educacional. Adapte livremente. / Educational use. Feel free to adapt.
