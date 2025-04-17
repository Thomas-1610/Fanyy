// Função para criptografar o nome do arquivo usando Base64
function encryptFileName(fileName) {
    return btoa(fileName); // Converte para Base64
}

// Função para descriptografar o nome do arquivo
function decryptFileName(encryptedFileName) {
    return atob(encryptedFileName); // Converte de Base64 para texto original
}

// Exemplo de uso
const encryptedReclamacoes = encryptFileName("Reclamacoes.html");
const encryptedDashboard = encryptFileName("dashboard.html");

console.log("Nome criptografado de Reclamacoes.html:", encryptedReclamacoes);
console.log("Nome criptografado de dashboard.html:", encryptedDashboard);

// Para redirecionar, use a versão criptografada
// Exemplo: window.location.href = decryptFileName(encryptedReclamacoes);
