document.addEventListener('DOMContentLoaded', () => {
    const isRoot = !window.location.pathname.includes('/aulas/');
    const componentPrefix = isRoot ? 'components/' : '../components/';

    // Load Components
    loadComponent('header-container', `${componentPrefix}header.html`, isRoot, initThemeToggle);
    loadComponent('sidebar-container', `${componentPrefix}sidebar.html`, isRoot);
    loadComponent('footer-container', `${componentPrefix}footer.html`, isRoot);

    // Initialize Terminal Simulator if present
    initTerminal();

    // Initialize Copy Buttons
    initCopyButtons();
});

async function loadComponent(containerId, path, isRoot, callback) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error(`Failed to load ${path}`);
        const html = await response.text();
        container.innerHTML = html;

        // Fix links
        if (isRoot) {
            const links = container.querySelectorAll('a');
            links.forEach(link => {
                const href = link.getAttribute('href');
                if (href && href.startsWith('../')) {
                    link.setAttribute('href', href.substring(3));
                }
            });
        } else {
            if (containerId === 'sidebar-container') {
                const currentFile = window.location.pathname.split('/').pop();
                const links = container.querySelectorAll('a');
                links.forEach(link => {
                    if (link.getAttribute('href').includes(currentFile)) {
                        link.classList.add('bg-blue-50', 'text-blue-600');
                        const span = link.querySelector('span');
                        if (span) {
                            span.classList.remove('bg-blue-100', 'text-blue-600');
                            span.classList.add('bg-blue-600', 'text-white');
                        }
                    }
                });
            }
        }

        if (callback) callback();

    } catch (error) {
        console.error(error);
    }
}

// --- Theme Toggle Logic ---
function initThemeToggle() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');

    if (!themeToggleBtn) return;

    // Check local storage or system preference
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        lightIcon.classList.remove('hidden');
    } else {
        document.documentElement.classList.remove('dark');
        darkIcon.classList.remove('hidden');
    }

    themeToggleBtn.addEventListener('click', () => {
        lightIcon.classList.toggle('hidden');
        darkIcon.classList.toggle('hidden');

        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
    });
}

// --- Terminal Simulator Logic ---
function initTerminal() {
    const terminalInput = document.querySelector('#terminal-simulator input');
    const terminalOutput = document.querySelector('#terminal-simulator [id^="terminal-output"]');

    if (!terminalInput || !terminalOutput) return;

    const commands = {
        'help': 'Comandos disponíveis: pwd, ls, cd, clear, echo, cat, mkdir, touch, rm, whoami, date',
        'pwd': '/home/usuario',
        'ls': 'Documentos  Imagens  Downloads  Projetos  notas.txt',
        'whoami': 'usuario',
        'date': new Date().toString(),
        'clear': 'CLEAR',
        'cd': 'Diretório alterado (simulado)',
        'mkdir': 'Diretório criado',
        'touch': 'Arquivo criado',
        'rm': 'Arquivo removido',
        'echo': (args) => args.join(' '),
        'cat': 'Conteúdo do arquivo simulado...'
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const fullCommand = terminalInput.value.trim();
            if (!fullCommand) return;

            const parts = fullCommand.split(' ');
            const cmd = parts[0].toLowerCase();
            const args = parts.slice(1);

            // Add command to history
            const commandLine = document.createElement('div');
            commandLine.className = 'mb-1';
            commandLine.innerHTML = `<span class="text-blue-400 mr-2">user@linux:~$</span><span class="text-white">${fullCommand}</span>`;
            terminalOutput.insertBefore(commandLine, terminalInput.parentElement);

            // Process command
            let response = '';
            if (cmd in commands) {
                if (typeof commands[cmd] === 'function') {
                    response = commands[cmd](args);
                } else {
                    response = commands[cmd];
                }
            } else {
                response = `Comando não encontrado: ${cmd}`;
            }

            if (response === 'CLEAR') {
                // Keep only the input line
                const inputContainer = terminalInput.parentElement;
                terminalOutput.innerHTML = '';
                terminalOutput.appendChild(inputContainer);
            } else {
                const responseLine = document.createElement('div');
                responseLine.className = 'mb-2 text-gray-300';
                responseLine.textContent = response;
                terminalOutput.insertBefore(responseLine, terminalInput.parentElement);
            }

            terminalInput.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });
}

// --- Copy to Clipboard Logic ---
function initCopyButtons() {
    // Find all code blocks (divs with bg-black or similar that contain commands)
    // In our case, they are divs with class 'bg-black' inside 'bg-gray-800'
    const codeBlocks = document.querySelectorAll('.bg-black');

    codeBlocks.forEach(block => {
        // Create container for relative positioning
        const wrapper = document.createElement('div');
        wrapper.className = 'relative group';

        // Insert wrapper before block and move block inside
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);

        // Create button
        const button = document.createElement('button');
        button.className = 'absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity';
        button.textContent = 'Copiar';

        button.addEventListener('click', () => {
            // Get text content, removing the $ sign if present
            let text = block.innerText;
            // Simple cleanup to get just the commands if possible, but full text is fine for now
            // or we can try to be smart. Let's just copy the text.

            navigator.clipboard.writeText(text).then(() => {
                button.textContent = 'Copiado!';
                setTimeout(() => {
                    button.textContent = 'Copiar';
                }, 2000);
            });
        });

        wrapper.appendChild(button);
    });
}
