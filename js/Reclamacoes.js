document.addEventListener('DOMContentLoaded', () => {
    const sendCodeBtn = document.getElementById('send-code-btn');
    const loginForm = document.getElementById('login-form');
    const codeInput = document.getElementById('code');

    let generatedCode = '';
    let codeExpirationTime = null;

    // Envia o código para o email configurado
    const sendCode = async () => {
        console.log('Botão de enviar código clicado');
        generatedCode = Math.floor(100000 + Math.random() * 900000).toString(); // Gera um código de 6 dígitos
        codeExpirationTime = Date.now() + 5 * 60 * 1000; // Define o tempo de expiração para 5 minutos
        console.log('Código gerado:', generatedCode);

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    service_id: 'service_3h3yi06', // ID do serviço fornecido
                    template_id: 'template_j8dsdwg', // ID do template fornecido
                    user_id: 'Y1ZoanJfz-x4xnChk', // Chave pública fornecida
                    template_params: {
                        to_email: 'thomaslcl.1610@gmail.com',
                        code: generatedCode,
                    },
                }),
            });

            if (response.ok) {
                alert(`Código enviado com sucesso para o email: thomaslcl.1610@gmail.com`);
            } else {
                const errorDetails = await response.json();
                console.error('Erro na resposta do EmailJS:', errorDetails);
                alert('Erro ao enviar o código. Verifique as configurações do EmailJS.');
            }
        } catch (error) {
            console.error('Erro ao enviar o código:', error);
            alert('Erro ao enviar o código. Tente novamente.');
        }
    };

    // Adiciona o evento de clique ao botão de enviar código
    sendCodeBtn.addEventListener('click', () => {
        console.log('Evento de clique no botão de enviar código');
        sendCode();
    });

    // Valida o código inserido pelo usuário
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('Formulário enviado');
        const enteredCode = codeInput.value;
        console.log('Código digitado:', enteredCode);
        if (enteredCode === generatedCode && Date.now() < codeExpirationTime) {
            console.log('Código validado com sucesso');
            window.location.href = 'Reclamacoes.html';
        } else {
            console.log('Código inválido ou expirado');
            alert('Código inválido ou expirado. Tente novamente.');
        }
    });
});
