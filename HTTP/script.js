// Mobile Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('active');
    menuBtn.textContent = mobileMenu?.classList.contains('active') ? '✕' : '☰';
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu?.querySelectorAll('a');
mobileLinks?.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.remove('active');
        menuBtn.textContent = '☰';
    });
});

// Method Cards - Toggle Details
const methodCards = document.querySelectorAll('.method-card');

methodCards.forEach(card => {
    card.addEventListener('click', () => {
        const details = card.querySelector('.method-details');
        const isHidden = details?.classList.contains('hidden');
        
        // Close all other details
        methodCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.querySelector('.method-details')?.classList.add('hidden');
            }
        });
        
        // Toggle current detail
        if (isHidden) {
            details?.classList.remove('hidden');
            card.style.backgroundColor = card.style.backgroundColor || 
                                        getComputedStyle(card).backgroundColor;
        } else {
            details?.classList.add('hidden');
        }
    });
});

// Status Code Information
const statusInfo = {
    '100': {
        title: '100 Continue',
        description: 'O servidor recebeu os cabeçalhos da requisição e o cliente deve prosseguir enviando o corpo da requisição.'
    },
    '101': {
        title: '101 Switching Protocols',
        description: 'O servidor está mudando de protocolo conforme solicitado pelo cliente.'
    },
    '200': {
        title: '200 OK',
        description: 'A requisição foi bem-sucedida. O significado exato depende do método HTTP usado.'
    },
    '201': {
        title: '201 Created',
        description: 'A requisição foi bem-sucedida e um novo recurso foi criado como resultado.'
    },
    '204': {
        title: '204 No Content',
        description: 'A requisição foi bem-sucedida mas não há conteúdo para enviar na resposta.'
    },
    '301': {
        title: '301 Moved Permanently',
        description: 'O recurso requisitado foi permanentemente movido para uma nova URL.'
    },
    '302': {
        title: '302 Found',
        description: 'O recurso requisitado reside temporariamente em uma URL diferente.'
    },
    '304': {
        title: '304 Not Modified',
        description: 'O recurso não foi modificado desde a última requisição. O cliente pode usar a versão em cache.'
    },
    '400': {
        title: '400 Bad Request',
        description: 'O servidor não pode processar a requisição devido a um erro do cliente (ex: sintaxe inválida).'
    },
    '401': {
        title: '401 Unauthorized',
        description: 'A requisição requer autenticação do usuário. O cliente deve se autenticar.'
    },
    '403': {
        title: '403 Forbidden',
        description: 'O servidor entendeu a requisição, mas se recusa a autorizá-la.'
    },
    '404': {
        title: '404 Not Found',
        description: 'O servidor não encontrou o recurso solicitado. Este é provavelmente o código de erro mais famoso da web!'
    },
    '500': {
        title: '500 Internal Server Error',
        description: 'O servidor encontrou uma condição inesperada que o impediu de atender à requisição.'
    },
    '502': {
        title: '502 Bad Gateway',
        description: 'O servidor, ao atuar como gateway ou proxy, recebeu uma resposta inválida do servidor upstream.'
    },
    '503': {
        title: '503 Service Unavailable',
        description: 'O servidor não está pronto para lidar com a requisição. Causas comuns: manutenção ou sobrecarga.'
    }
};

// Status Code Modal
const statusModal = document.getElementById('statusModal');
const modalTitle = document.getElementById('modalTitle');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

const statusCodes = document.querySelectorAll('.status-code');

statusCodes.forEach(code => {
    code.addEventListener('click', (e) => {
        e.stopPropagation();
        const codeNumber = code.getAttribute('data-code');
        const info = statusInfo[codeNumber];
        
        if (info) {
            modalTitle.textContent = info.title;
            modalContent.innerHTML = `
                <p class="text-lg mb-4">${info.description}</p>
                <div class="bg-gray-900 p-4 rounded-lg">
                    <p class="text-sm text-gray-400 mb-2">Exemplo de uso:</p>
                    <code class="text-green-400">HTTP/1.1 ${codeNumber} ${info.title.split(' ').slice(1).join(' ')}</code>
                </div>
            `;
            statusModal.classList.add('active');
            statusModal.classList.remove('hidden');
        }
    });
});

closeModal?.addEventListener('click', () => {
    statusModal?.classList.remove('active');
    setTimeout(() => {
        statusModal?.classList.add('hidden');
    }, 300);
});

statusModal?.addEventListener('click', (e) => {
    if (e.target === statusModal) {
        statusModal.classList.remove('active');
        setTimeout(() => {
            statusModal.classList.add('hidden');
        }, 300);
    }
});

// API Demo - Interactive Request
const sendRequestBtn = document.getElementById('sendRequest');
const apiMethod = document.getElementById('apiMethod');
const apiUrl = document.getElementById('apiUrl');
const apiBody = document.getElementById('apiBody');
const responseSection = document.getElementById('responseSection');
const errorSection = document.getElementById('errorSection');
const responseStatus = document.getElementById('responseStatus');
const responseBody = document.getElementById('responseBody');
const errorMessage = document.getElementById('errorMessage');

sendRequestBtn?.addEventListener('click', async () => {
    // Hide previous responses
    responseSection?.classList.add('hidden');
    errorSection?.classList.add('hidden');
    
    // Add loading state
    sendRequestBtn.classList.add('loading');
    sendRequestBtn.disabled = true;
    sendRequestBtn.textContent = 'Enviando...';
    
    try {
        const method = apiMethod?.value || 'GET';
        const url = apiUrl?.value;
        
        if (!url) {
            throw new Error('Por favor, insira uma URL válida');
        }
        
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            }
        };
        
        // Add body for POST, PUT, PATCH methods
        if (['POST', 'PUT', 'PATCH'].includes(method) && apiBody?.value.trim()) {
            try {
                options.body = apiBody.value.trim();
                // Validate JSON
                JSON.parse(options.body);
            } catch (e) {
                throw new Error('JSON inválido no corpo da requisição');
            }
        }
        
        const response = await fetch(url, options);
        const data = await response.json();
        
        // Show response
        responseStatus.textContent = `${response.status} ${response.statusText}`;
        responseStatus.className = response.ok ? 'ml-2 font-bold text-green-400' : 'ml-2 font-bold text-red-400';
        responseBody.textContent = JSON.stringify(data, null, 2);
        responseSection?.classList.remove('hidden');
        
        // Add animation
        responseSection.style.animation = 'fadeIn 0.5s ease-out';
        
    } catch (error) {
        // Show error
        errorMessage.textContent = error.message || 'Ocorreu um erro ao fazer a requisição. Verifique a URL e tente novamente.';
        errorSection?.classList.remove('hidden');
        errorSection.style.animation = 'fadeIn 0.5s ease-out';
    } finally {
        // Remove loading state
        sendRequestBtn.classList.remove('loading');
        sendRequestBtn.disabled = false;
        sendRequestBtn.textContent = 'Enviar Requisição 🚀';
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animation - Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .method-card, .status-category, .header-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Active Navigation Highlight on Scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-blue-400');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-blue-400');
        }
    });
});

// Keyboard Shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && statusModal?.classList.contains('active')) {
        statusModal.classList.remove('active');
        setTimeout(() => {
            statusModal.classList.add('hidden');
        }, 300);
    }
    
    // Ctrl/Cmd + K to focus on API URL input
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        apiUrl?.focus();
        apiUrl?.select();
    }
});

// Add tooltip functionality for status codes
statusCodes.forEach(code => {
    code.style.cursor = 'help';
    code.title = 'Clique para mais informações';
});

// Dynamic year in footer
const currentYear = new Date().getFullYear();
const footerYear = document.querySelector('footer p:last-child');
if (footerYear) {
    footerYear.textContent = footerYear.textContent.replace('2025', currentYear.toString());
}

// Console Easter Egg
console.log('%c🚀 HTTP Guide v1.0', 'font-size: 20px; color: #3b82f6; font-weight: bold;');
console.log('%cDesenvolvido com Tailwind CSS e SASS', 'font-size: 12px; color: #8b5cf6;');
console.log('%cDica: Use Ctrl/Cmd + K para focar no campo de URL da API!', 'font-size: 10px; color: #10b981;');

// Initialize demo with sample data for POST/PUT
apiMethod?.addEventListener('change', (e) => {
    const method = e.target.value;
    
    if (['POST', 'PUT', 'PATCH'].includes(method)) {
        apiBody.value = JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }, null, 2);
    } else {
        apiBody.value = '';
    }
    
    // Update URL based on method
    if (method === 'POST') {
        apiUrl.value = 'https://jsonplaceholder.typicode.com/posts';
    } else if (method === 'DELETE') {
        apiUrl.value = 'https://jsonplaceholder.typicode.com/posts/1';
    } else {
        apiUrl.value = 'https://jsonplaceholder.typicode.com/posts/1';
    }
});

// Add copy to clipboard functionality for code examples
const codeBlocks = document.querySelectorAll('code');
codeBlocks.forEach(block => {
    block.style.position = 'relative';
    block.addEventListener('dblclick', async () => {
        try {
            await navigator.clipboard.writeText(block.textContent);
            
            // Visual feedback
            const originalBg = block.style.backgroundColor;
            block.style.backgroundColor = 'rgba(16, 185, 129, 0.2)';
            setTimeout(() => {
                block.style.backgroundColor = originalBg;
            }, 300);
            
            // Show toast notification
            showToast('Código copiado para a área de transferência!');
        } catch (err) {
            console.error('Erro ao copiar:', err);
        }
    });
});

// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 9999;
        animation: slideIn 0.3s ease-out;
        font-weight: 500;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Add slideIn and fadeOut animations if not present
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: translateY(20px);
        }
    }
`;
document.head.appendChild(style);

console.log('%c💡 Dica: Dê duplo clique em qualquer bloco de código para copiar!', 'font-size: 10px; color: #f59e0b;');
