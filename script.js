/**
 * Esta função é chamada quando um botão de pedido é clicado.
 * @param {string} nomeDoPrato - O nome do item que está sendo pedido.
 */
function fazerPedido(nomeDoPrato) {
    // Exibe uma mensagem simples de confirmação
    alert("Seu pedido para '" + nomeDoPrato + "' foi recebido!");
}


// --- NOVO: Funções do Modal de Login ---

// Pega o elemento principal do modal
const modal = document.getElementById('loginModal');

/**
 * Função para ABRIR o modal
 * Adiciona a classe 'mostrar' ao modal, que o CSS usa para exibi-lo
 */
function abrirModalLogin() {
    modal.classList.add('mostrar');
}

/**
 * Função para FECHAR o modal
 * Remove a classe 'mostrar' do modal
 */
function fecharModalLogin() {
    modal.classList.remove('mostrar');
}

/**
 * Função para simular o login
 */
function fazerLogin() {
    // Pega o valor do campo de usuário
    const username = document.getElementById('username').value;
    
    // Validação simples
    if (username === "") {
        alert("Por favor, insira um nome de usuário.");
        return; // Para a execução da função
    }

    // --- SIMULAÇÃO DE LOGIN ---
    // Em um site real, aqui você enviaria os dados para um servidor
    // que verificaria o usuário e a senha em um banco de dados.
    
    // Como é front-end, apenas exibimos um alerta de sucesso
    alert("Login bem-sucedido! \n\nBem-vindo(a) de volta, " + username + "!");
    
    // Fecha o modal após o "login"
    fecharModalLogin();

    // Limpa os campos (opcional)
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
}
