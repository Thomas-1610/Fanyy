function login() {
    const predefinedPassword = "56166523858";

    const passwordInput = document.getElementById("password").value;

    if ( passwordInput === predefinedPassword) {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to dashboard.html on successful login
        window.location.href = "../Paginas/V1trereclamacoes.html";
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
}

function checkLoginCode() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "../Paginas/V1trereclamacoes.html";
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "./index.html";
}

document.querySelector(".login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    login();
});

