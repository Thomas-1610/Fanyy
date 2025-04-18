// Desabilitar o clique direito
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert('Ação desabilitada!');
});

// Bloquear atalhos de teclado para inspecionar ou visualizar o código-fonte
document.addEventListener('keydown', (event) => {
    // Bloqueia Ctrl+U (ver código-fonte)
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert('Ação desabilitada!');
    }
    // Bloqueia Ctrl+Shift+I (abrir ferramentas de desenvolvedor)
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
        alert('Ação desabilitada!');
    }
    // Bloqueia F12 (abrir ferramentas de desenvolvedor)
    if (event.key === 'F12') {
        event.preventDefault();
        alert('Ação desabilitada!');
    }
});
