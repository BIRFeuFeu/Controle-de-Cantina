/**
 * Função para simular o login
 */
function fazerLogin() {
    // Pega os valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Pega o elemento da mensagem de erro
    const loginError = document.getElementById('login-error');
    
    // --- SIMULAÇÃO DE AUTENTICAÇÃO ---
    // Em um site real, você enviaria isso para um servidor.
    
    if (username === 'admin' && password === '123') {
        // Sucesso!
        loginError.style.display = 'none'; // Esconde erro
        
        // Redireciona o usuário para a página principal
        window.location.href = 'home.html'; 
        
    } else {
        // Falha!
        loginError.textContent = 'Usuário ou senha inválidos. Tente novamente.';
        loginError.style.display = 'block'; // Mostra erro
    }
}
