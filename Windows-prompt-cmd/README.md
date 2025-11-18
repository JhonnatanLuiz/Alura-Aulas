# 💻 Windows Prompt CMD - Tutorial Completo

Um site educacional completo e interativo para aprender o Prompt de Comando do Windows (CMD) do básico ao avançado.

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido para ensinar o uso do CMD de forma prática e progressiva, com exemplos interativos, exercícios e um terminal simulado direto no navegador.

## ✨ Funcionalidades

- ✅ **5 Aulas Progressivas** - Do básico ao avançado
- ✅ **Terminal Interativo** - Teste comandos direto no navegador
- ✅ **Design Moderno** - Interface dark com gradientes e animações
- ✅ **Responsivo** - Funciona perfeitamente em mobile e desktop
- ✅ **Exemplos Práticos** - Código copiável com um clique
- ✅ **Exercícios** - Pratique o que aprendeu
- ✅ **Documentação Completa** - Todas as variações de comandos

## 📚 Conteúdo das Aulas

### 🚀 Aula 1: Começando no Prompt
- Por que usar um terminal
- Como abrir o CMD
- Comandos básicos: `dir`, `cd`, `mkdir`, `cls`
- Exercício prático completo

### 📝 Aula 2: Criando Scripts (em desenvolvimento)
- Comando `echo`
- Criar arquivos `.bat`
- Uso de `pause`, `*`, `tar`
- Tratamento de erros

### 🧪 Aula 3: Variáveis de Ambiente (em desenvolvimento)
- O que são variáveis
- `PATH`, `set`, `setx`
- Instalação do Python
- Integração com PATH

### 📦 Aula 4: Gerenciador de Pacotes (em desenvolvimento)
- Introdução ao Chocolatey
- Comandos básicos
- Instalação de programas via CLI

### 🛠 Aula 5: Ferramentas e WSL (em desenvolvimento)
- Winget
- Cmder e Windows Terminal
- WSL - Windows Subsystem for Linux
- Comandos básicos do Linux

## 🎨 Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **Tailwind CSS** - Framework CSS via CDN
- **JavaScript Vanilla** - Sem dependências
- **Design System** - Cores CMD originais (`#0C0C0C`, `#13A10E`)

## 📁 Estrutura do Projeto

```
Windows-prompt-cmd/
│
├── index.html              # Página inicial
├── aulas/
│   ├── aula1.html         # ✅ Começando no Prompt
│   ├── aula2.html         # 🚧 Criando Scripts
│   ├── aula3.html         # 🚧 Variáveis de Ambiente
│   ├── aula4.html         # 🚧 Gerenciador de Pacotes
│   └── aula5.html         # 🚧 Ferramentas e WSL
│
├── js/
│   └── main.js            # Terminal interativo + Utils
│
├── css/
│   └── style.css          # Estilos personalizados (opcional)
│
├── img/
│   └── (imagens)          # Screenshots e ilustrações
│
├── components/
│   └── (componentes)      # Headers, footers reutilizáveis
│
└── README.md              # Este arquivo
```

## 🚀 Como Usar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/JhonnatanLuiz/Windows-prompt-cmd.git
   ```

2. **Abra o arquivo `index.html`** no navegador
   - Não precisa de servidor local
   - Funciona offline

3. **Navegue pelas aulas**
   - Clique nos cards coloridos
   - Teste o terminal interativo
   - Copie os comandos com um clique

## 💡 Terminal Interativo

O site inclui um terminal funcional que simula o CMD do Windows. Comandos disponíveis:

| Comando | Descrição |
|---------|-----------|
| `help` | Lista todos os comandos disponíveis |
| `dir` | Lista arquivos e pastas |
| `cls` | Limpa a tela do terminal |
| `echo [mensagem]` | Exibe uma mensagem |
| `date` | Mostra a data atual |
| `time` | Mostra a hora atual |
| `ver` | Exibe a versão do Windows |
| `whoami` | Mostra o usuário atual |
| `matrix` | 🎉 Easter egg secreto! |

## 🎯 Recursos Didáticos

### Cada aula contém:

- 📖 **Teoria** - Conceitos explicados de forma clara
- 💻 **Exemplos** - Código CMD real e funcional
- 📋 **Botões de Cópia** - Copie comandos com um clique
- 🎯 **Exercícios** - Pratique o que aprendeu
- 📊 **Resumo** - Recapitulação dos conceitos
- 🔗 **Navegação** - Links para próxima aula

### Design Features:

- 🎨 **Cards Coloridos** - Cada aula tem uma cor única
- 📱 **Mobile-First** - Interface responsiva
- 🌙 **Dark Theme** - Interface dark profissional
- ✨ **Animações** - Efeitos suaves e modernos
- 🎭 **Gradientes** - Headers vibrantes

## 🔧 Personalização

### Cores do CMD:
```javascript
'cmd-dark': '#0C0C0C',   // Fundo do terminal
'cmd-text': '#CCCCCC',   // Texto padrão
'cmd-green': '#13A10E',  // Verde do CMD
```

### Modificar comandos do terminal:
Edite o arquivo `js/main.js` no objeto `commands`:

```javascript
const commands = {
    novoComando: (args) => {
        return `<div class="text-cmd-text">Sua resposta aqui</div>`;
    }
};
```

## 📖 Referências

- [Documentação Microsoft - Windows Commands](https://docs.microsoft.com/windows-server/administration/windows-commands/windows-commands)
- [Chocolatey](https://chocolatey.org/)
- [WSL Documentation](https://learn.microsoft.com/windows/wsl/)
- [Windows Terminal](https://github.com/microsoft/terminal)

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaAula`)
3. Commit suas mudanças (`git commit -m 'Adiciona Aula 6'`)
4. Push para a branch (`git push origin feature/NovaAula`)
5. Abra um Pull Request

## 📝 Roadmap

- [x] Página inicial com hero section
- [x] Terminal interativo funcional
- [x] Aula 1: Comandos básicos
- [ ] Aula 2: Scripts batch
- [ ] Aula 3: Variáveis de ambiente
- [ ] Aula 4: Chocolatey
- [ ] Aula 5: WSL e ferramentas
- [ ] Área de exercícios avançados
- [ ] Quiz interativo
- [ ] Certificado de conclusão

## 👨‍💻 Autor

**Jhonnatan Luiz**

- 📧 Email: [seu-email@exemplo.com]
- 🔗 LinkedIn: [seu-linkedin]
- 🐙 GitHub: [@JhonnatanLuiz](https://github.com/JhonnatanLuiz)

## 📄 Licença

Este projeto é de código aberto e está disponível para fins educacionais.

## 🙏 Agradecimentos

- Inspirado na documentação oficial da Microsoft
- Comunidade de desenvolvedores Windows
- Alura - Cursos de tecnologia

---

**Desenvolvido com ❤️ para ensinar CMD de forma moderna e interativa**

**Status do Projeto:** 🟢 Em Desenvolvimento Ativo

- ✅ Aula 1 completa
- 🚧 Aulas 2-5 em desenvolvimento
- 💻 Terminal funcional
- 🎨 Design finalizado
