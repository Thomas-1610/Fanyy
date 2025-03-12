function login() {
    const predefinedUsername = "Fanyzinha";
    const predefinedPassword = "chicocoins";

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    if (usernameInput === predefinedUsername && passwordInput === predefinedPassword) {
        // Store login status in localStorage
        localStorage.setItem("isLoggedIn", "true");
        // Redirect to dashboard.html on successful login
        window.location.href = "./dashboard.html";
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
}

function checkLogin() {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        window.location.href = "./index.html";
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
