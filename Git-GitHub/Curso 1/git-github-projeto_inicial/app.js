// Utilidades DOM
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

// Smooth scroll para âncoras internas
document.addEventListener('click', (e) => {
	const a = e.target.closest('a[href^="#"]');
	if (!a) return;
	const id = a.getAttribute('href');
	if (id.length > 1) {
		const el = document.querySelector(id);
		if (el) {
			e.preventDefault();
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			history.replaceState(null, '', id);
		}
	}
});

// Tema claro/escuro com persistência (sobrepõe preferência do sistema)
const themeBtn = $('#toggleTheme');
const applyTheme = (mode) => {
	const isDark = mode === 'dark';
	document.body.classList.toggle('theme-dark', isDark);
	document.body.classList.toggle('theme-light', !isDark);
	if (themeBtn) themeBtn.setAttribute('aria-pressed', String(isDark));
};
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
applyTheme(initialTheme);
if (themeBtn) {
	themeBtn.addEventListener('click', () => {
		const next = document.body.classList.contains('theme-dark') ? 'light' : 'dark';
		applyTheme(next);
		localStorage.setItem('theme', next);
		// Atualiza temas dependentes (HLJS e Mermaid)
		setHighlightTheme(next);
		if (window.mermaid) try { window.mermaid.initialize({ startOnLoad: true, theme: next === 'dark' ? 'dark' : 'default' }); } catch {}
	});
}

// Botão back-to-top
const backToTop = $('#backToTop');
if (backToTop) {
	window.addEventListener('scroll', () => {
		backToTop.style.display = window.scrollY > 400 ? 'inline-block' : 'none';
	});
	backToTop.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
}

// Copiar comandos dos blocos
function setupCopyButtons() {
	$$('.cmd').forEach((block) => {
		const btn = $('.copy', block);
		const code = $('pre code', block);
		if (!btn || !code) return;
		btn.addEventListener('click', async () => {
			try {
				const text = code.innerText.replace(/^\$\s?/gm, '');
				await navigator.clipboard.writeText(text);
				const old = btn.textContent;
				btn.textContent = 'Copiado!';
				setTimeout(() => (btn.textContent = old), 1200);
			} catch (err) {
				console.error('Falha ao copiar', err);
			}
		});
	});
}
setupCopyButtons();

// Busca nas seções
const searchInput = $('#search');
const content = $('#content');
let lastQuery = '';
function filterSections(query) {
	if (!content) return;
	const q = query.trim().toLowerCase();
	if (q === lastQuery) return;
	lastQuery = q;
	$$('#content > section').forEach((sec) => {
		const text = sec.innerText.toLowerCase();
		sec.style.display = q && !text.includes(q) ? 'none' : '';
	});
}
if (searchInput) {
	searchInput.addEventListener('input', (e) => filterSections(e.target.value));
}

// Mermaid initialization (if available)
if (window.mermaid) {
	try {
		window.mermaid.initialize({ startOnLoad: true, theme: document.body.classList.contains('theme-dark') ? 'dark' : 'default' });
	} catch {}
}

// Exercícios: validação simples
function initExercises() {
	const exercises = $$('.exercise');
	if (!exercises.length) return;

	exercises.forEach((ex) => {
		const id = ex.getAttribute('data-id');
		const btn = $('.validate', ex);
		const result = $('.result', ex);
		const inputs = $$('input', ex);
		const hintBtn = $('.hint', ex);
		const solutionBtn = $('.show-solution', ex);
		const hintsList = $('.hints', ex);
		const solutionPre = $('.solution', ex);
		if (!btn || !result || !inputs.length) return;

		// Restaurar progresso
		const saved = JSON.parse(localStorage.getItem('ex-' + id) || '{}');
		inputs.forEach((inp, i) => { if (saved['i' + i]) inp.value = saved['i' + i]; });
		if (typeof saved.ok === 'boolean') {
			result.textContent = saved.ok ? '✅ Correto!' : '';
			result.classList.toggle('ok', saved.ok);
			result.classList.toggle('fail', false);
		}

		btn.addEventListener('click', () => {
			let ok = false;
					if (id === 'ex1') {
						// git commit -m "type(scope)?: desc" (tipos ampliados)
						const re = /^git\s+commit\s+-m\s+"(feat|fix|docs|chore|refactor|perf|style|test|build|ci)(\([^)]+\))?:\s+.+"$/i;
				ok = re.test(inputs[0].value.trim());
			} else if (id === 'ex2') {
				const a = /^(git\s+switch\s+-c\s+\S+|git\s+checkout\s+-b\s+\S+)$/i.test(inputs[0].value.trim());
				const b = /^git\s+merge\s+\S+$/i.test(inputs[1].value.trim());
				ok = a && b;
			} else if (id === 'ex3') {
				const a = /^git\s+bisect\s+start$/i.test(inputs[0].value.trim());
				const b = /^git\s+bisect\s+bad(\s+\S+)?$/i.test(inputs[1].value.trim());
				const c = /^git\s+bisect\s+good(\s+\S+)?$/i.test(inputs[2].value.trim());
				const d = /^git\s+bisect\s+reset$/i.test(inputs[3].value.trim());
				ok = a && b && c && d;
			} else if (id === 'ex4') {
				const a = /^git\s+stash$/i.test(inputs[0].value.trim());
				const b = /^git\s+stash\s+list$/i.test(inputs[1].value.trim());
				const c = /^git\s+stash\s+pop(\s+stash@\{\d+\})?$/i.test(inputs[2].value.trim());
				const d = /^git\s+stash\s+apply(\s+stash@\{\d+\})?$/i.test(inputs[3].value.trim());
				const e = /^git\s+stash\s+drop(\s+stash@\{\d+\})?$/i.test(inputs[4].value.trim());
				const f = /^git\s+stash\s+clear$/i.test(inputs[5].value.trim());
				ok = a && b && c && d && e && f;
			} else if (id === 'ex5') {
				const a = /^git\s+rebase\s+\S+$/i.test(inputs[0].value.trim());
				const b = /^git\s+add\s+\.\s*$/i.test(inputs[1].value.trim());
				const c = /^git\s+rebase\s+--continue$/i.test(inputs[2].value.trim());
				const d = /^git\s+rebase\s+--abort$/i.test(inputs[3].value.trim()) || inputs[3].value.trim() === '';
				ok = a && b && c && d;
			} else if (id === 'ex6') {
				const a = /^git\s+revert\s+\S+$/i.test(inputs[0].value.trim());
				const b = /^git\s+reset\s+--(soft|mixed|hard)\s+\S+$/i.test(inputs[1].value.trim());
				ok = a && b;
			} else if (id === 'ex7') {
				const v = inputs[0].value.trim();
				const list = /^git\s+cherry-pick(\s+\S+){2,}$/i.test(v); // 2+ hashes
				const range = /^git\s+cherry-pick\s+\S+\.\.\.?\S+$/i.test(v); // a..b ou a...b
				ok = list || range;
			}

			result.textContent = ok ? '✅ Correto!' : '❌ Ainda não. Tente novamente.';
			result.classList.toggle('ok', ok);
			result.classList.toggle('fail', !ok);

			// Salvar progresso
			const toSave = { ok };
			inputs.forEach((inp, i) => (toSave['i' + i] = inp.value));
			localStorage.setItem('ex-' + id, JSON.stringify(toSave));
		});

		// Dicas e solução
		const tips = getExerciseTips(id);
		const solution = getExerciseSolution(id);
		if (hintBtn && hintsList) {
			hintBtn.addEventListener('click', () => {
				const shown = hintsList.querySelectorAll('li').length;
				if (shown < tips.length) {
					const li = document.createElement('li');
					li.textContent = tips[shown];
					hintsList.appendChild(li);
				}
			});
		}
		if (solutionBtn && solutionPre) {
			solutionPre.textContent = solution;
			solutionBtn.addEventListener('click', () => {
				solutionPre.classList.toggle('hidden');
				// realçar solução quando exibida
				if (!solutionPre.classList.contains('hidden') && window.hljs) {
					try { window.hljs.highlightElement(solutionPre); } catch {}
				}
			});
		}
	});
}
initExercises();

// Dicas e soluções por exercício
function getExerciseTips(id) {
	switch (id) {
		case 'ex1':
			return [
				'Use git commit -m "<tipo>(<escopo>): <descrição>"',
				'Tipos: feat, fix, docs, chore, refactor',
				'Ex.: feat(ui): melhora layout do header',
			];
		case 'ex2':
			return ['Crie e mude para a branch com switch -c', 'Depois faça merge para integrar as mudanças'];
		case 'ex3':
			return ['Comece com git bisect start', 'Marque commits como good/bad e finalize com reset'];
		case 'ex4':
			return [
				'Salve com git stash (guarda working tree + staging area)',
				'Liste com git stash list para ver todos os stashes',
				'git stash pop aplica E remove da lista',
				'git stash apply aplica MAS mantém na lista',
				'git stash drop remove item específico',
				'git stash clear remove TODOS os stashes'
			];
		case 'ex5':
			return ['Inicie: git rebase main', 'Após resolver conflitos: git add . e git rebase --continue'];
		case 'ex6':
			return ['git revert cria novo commit revertendo outro', 'git reset move ponteiros (cuidado com --hard)'];
		case 'ex7':
			return ['Passe múltiplos hashes: git cherry-pick a b', 'Ou use range: git cherry-pick a..b'];
		default:
			return [];
	}
}
function getExerciseSolution(id) {
	switch (id) {
		case 'ex1':
			return 'git commit -m "feat(login): adiciona validação"';
		case 'ex2':
			return 'git switch -c minha-branch\n# ...faça mudanças e commit...\ngit merge minha-branch';
		case 'ex3':
			return 'git bisect start\ngit bisect bad\ngit bisect good v1.0.0\n# ...marque good/bad conforme testes...\ngit bisect reset';
		case 'ex4':
			return 'git stash\ngit stash list\ngit stash pop\ngit stash apply\ngit stash drop\ngit stash clear';
		case 'ex5':
			return 'git rebase main\n# resolva conflitos\ngit add .\ngit rebase --continue\n# se necessário\ngit rebase --abort';
		case 'ex6':
			return 'git revert <hash>\n# ou\ngit reset --hard HEAD~1';
		case 'ex7':
			return 'git cherry-pick a1b2c3 d4e5f6\n# ou\ngit cherry-pick a1b2c3..d4e5f6';
		default:
			return '';
	}
}

// Highlight.js: aplicar tema conforme modo e realçar blocos
function setHighlightTheme(mode) {
	const ids = ['hljs-light-local','hljs-dark-local','hljs-light','hljs-dark'];
	const isDark = mode === 'dark';
	ids.forEach((id) => {
		const el = document.getElementById(id);
		if (!el) return;
		const isLightEl = id.includes('light');
		el.disabled = isDark ? isLightEl : !isLightEl;
	});
}
if (window.hljs) {
	try {
		setHighlightTheme(document.body.classList.contains('theme-dark') ? 'dark' : 'light');
		window.hljs.highlightAll();
	} catch {}
}
