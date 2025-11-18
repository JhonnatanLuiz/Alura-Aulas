// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Terminal Interativo
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');

// Comandos simulados
const commands = {
    help: () => {
        return `
<div class="text-cmd-green">Comandos disponíveis:</div>
<div class="ml-4 text-cmd-text">
  <div><span class="text-yellow-400">help</span>     - Exibe esta lista de comandos</div>
  <div><span class="text-yellow-400">dir</span>      - Lista arquivos e pastas</div>
  <div><span class="text-yellow-400">cls</span>      - Limpa a tela do terminal</div>
  <div><span class="text-yellow-400">echo</span>     - Exibe uma mensagem</div>
  <div><span class="text-yellow-400">date</span>     - Mostra a data atual</div>
  <div><span class="text-yellow-400">time</span>     - Mostra a hora atual</div>
  <div><span class="text-yellow-400">ver</span>      - Exibe a versão do Windows</div>
  <div><span class="text-yellow-400">whoami</span>   - Mostra o usuário atual</div>
</div>`;
    },
    
    dir: () => {
        return `
<div class="text-cmd-text">O volume na unidade C não tem nome.</div>
<div class="text-cmd-text">O Número de Série do Volume é 1A2B-3C4D</div>
<div class="mt-2 text-cmd-text">Pasta de C:\\Users\\Você</div>
<div class="mt-2">
  <div class="text-cmd-text">18/11/2025  10:30    &lt;DIR&gt;          .</div>
  <div class="text-cmd-text">18/11/2025  10:30    &lt;DIR&gt;          ..</div>
  <div class="text-cmd-text">15/11/2025  14:22    &lt;DIR&gt;          Desktop</div>
  <div class="text-cmd-text">10/11/2025  09:15    &lt;DIR&gt;          Documents</div>
  <div class="text-cmd-text">12/11/2025  16:45    &lt;DIR&gt;          Downloads</div>
  <div class="text-cmd-text">08/11/2025  11:30    &lt;DIR&gt;          Pictures</div>
  <div class="text-cmd-text">05/11/2025  13:20         1.024 exemplo.txt</div>
  <div class="text-cmd-text">03/11/2025  08:45         2.560 script.bat</div>
</div>
<div class="mt-2 text-cmd-text">               2 arquivo(s)          3.584 bytes</div>
<div class="text-cmd-text">               6 pasta(s)   125.438.976.000 bytes disponíveis</div>`;
    },
    
    cls: () => {
        clearTerminal();
        return '';
    },
    
    echo: (args) => {
        const message = args.join(' ') || '';
        return `<div class="text-cmd-text">${message}</div>`;
    },
    
    date: () => {
        const now = new Date();
        const dateStr = now.toLocaleDateString('pt-BR', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        return `<div class="text-cmd-text">A data atual é: ${dateStr}</div>`;
    },
    
    time: () => {
        const now = new Date();
        const timeStr = now.toLocaleTimeString('pt-BR');
        return `<div class="text-cmd-text">A hora atual é: ${timeStr}</div>`;
    },
    
    ver: () => {
        return `<div class="text-cmd-text">Microsoft Windows [versão 10.0.19045.3803]</div>`;
    },
    
    whoami: () => {
        return `<div class="text-cmd-text">desktop-abc123\\Você</div>`;
    }
};

// Processar comando
function processCommand(input) {
    const parts = input.trim().split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    // Adiciona o comando digitado ao output
    const commandLine = document.createElement('div');
    commandLine.className = 'mb-2';
    commandLine.innerHTML = `<span class="text-white">C:\\Users\\Você&gt;</span> <span class="text-cmd-text">${input}</span>`;
    terminalOutput.appendChild(commandLine);
    
    // Processa o comando
    if (command === '') {
        // Comando vazio, apenas nova linha
    } else if (commands[command]) {
        const result = commands[command](args);
        if (result) {
            const resultDiv = document.createElement('div');
            resultDiv.className = 'mb-2';
            resultDiv.innerHTML = result;
            terminalOutput.appendChild(resultDiv);
        }
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'mb-2 text-red-400';
        errorDiv.innerHTML = `'${command}' não é reconhecido como um comando interno ou externo, um programa operável ou um arquivo em lotes.`;
        terminalOutput.appendChild(errorDiv);
    }
    
    // Scroll para o final
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Event listener para o input
if (terminalInput) {
    terminalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const input = terminalInput.value;
            processCommand(input);
            terminalInput.value = '';
        }
    });
    
    // Auto-focus no input
    terminalInput.focus();
}

// Função para limpar terminal
function clearTerminal() {
    if (terminalOutput) {
        terminalOutput.innerHTML = `
            <div class="text-cmd-green">Microsoft Windows [Version 10.0.19045.3803]</div>
            <div class="text-cmd-green">(c) Microsoft Corporation. Todos os direitos reservados.</div>
            <div class="mt-2"></div>
        `;
    }
}

// Animação de digitação (opcional - para hero section)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Smooth scroll para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Fecha menu mobile se estiver aberto
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        }
    });
});

// Easter egg: Comando secreto
commands.matrix = () => {
    return `
<div class="text-green-400 animate-pulse">
⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣶⣦⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⡿⠛⠉⠙⠛⠛⠛⠛⠻⢿⣿⣷⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣼⣿⠋⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⠈⢻⣿⣿⡄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣸⣿⡏⠀⠀⠀⣠⣶⣾⣿⣿⣿⠿⠿⠿⢿⣿⣿⣿⣄⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣿⣿⠁⠀⠀⢰⣿⣿⣯⠁⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⣷⡄⠀
⠀⠀⣀⣤⣴⣶⣶⣿⡀⠀⠀⢸⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣷⠀
⠀⢰⣿⡟⠋⠉⣹⣿⡇⠀⠀⠘⣿⣿⣿⣿⣷⣦⣤⣤⣤⣶⣶⣶⣶⣿⣿⣿⠀
⠀⢸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠀
⠀⣸⣿⡇⠀⠀⣿⣿⡇⠀⠀⠀⠀⠀⠉⠻⠿⣿⣿⣿⣿⡿⠿⠿⠛⢻⣿⡇⠀
</div>
<div class="text-green-400">Wake up, Neo... The Matrix has you...</div>
<div class="text-cmd-text mt-2">Easter egg encontrado! 🎉</div>`;
};

console.log('%c🚀 Windows CMD Tutorial', 'color: #13A10E; font-size: 20px; font-weight: bold;');
console.log('%cTerminal interativo carregado com sucesso!', 'color: #0C0C0C; background: #CCCCCC; padding: 5px;');
console.log('%cDica: Digite "matrix" no terminal... 😉', 'color: #666;');
