function login() {
    const predefinedPassword = "561665";
    const passwordInput = document.getElementById("password").value;

    if (passwordInput === predefinedPassword) {
        // Armazena o estado de login no localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redireciona para Reclamacoes.html criptografado
        const encryptedReclamacoes = "Um9jbGFtYWNvZXMuaHRtbA=="; // Nome criptografado de Reclamacoes.html
        window.location.href = decryptFileName(encryptedReclamacoes);
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
}

function checkLogin() {
    // Verifica se o usuário está autenticado
    if (!localStorage.getItem("isLoggedIn") || localStorage.getItem("isLoggedIn") !== "true") {
        // Redireciona para a página de login se não estiver autenticado
        window.location.href = "../Paginas/LoginReclamacoes.html";
    }
}

function logout() {
    // Remove o estado de login e redireciona para a página inicial
    localStorage.removeItem("isLoggedIn");
    const encryptedDashboard = "ZGFzaGJvYXJkLmh0bWw="; // Nome criptografado de dashboard.html
    window.location.href = decryptFileName(encryptedDashboard);
}

document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    login();
});
