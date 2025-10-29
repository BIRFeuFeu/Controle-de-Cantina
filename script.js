// Espera o HTML carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // --- Passo 1: Declarando variáveis ---
    
    // Use 'var' para declarar o nome da cantina (escopo global/função)
    var nomeCantina = "Cantina da Escola";
    
    // Use 'let' para declarar a quantidade (valor pode mudar)
    let salgados = 20;
    
    // Use 'const' para declarar o preço fixo (valor não pode mudar)
    const precoSalgado = 5.00;
    
    // Variável 'let' para rastrear o total de vendas
    let totalVendido = 0.00;

    // --- Conectando o JS com o HTML ---
    const elNomeCantina = document.getElementById('nome-cantina');
    const elQtdSalgados = document.getElementById('qtd-salgados');
    const elPrecoSalgado = document.getElementById('preco-salgado');
    const elTotalVendido = document.getElementById('total-vendido');
    const btnVender = document.getElementById('btn-vender');

    // --- Atualizando a Página com os valores iniciais ---
    function atualizarPainel() {
        elNomeCantina.textContent = nomeCantina;
        elQtdSalgados.textContent = salgados;
        elPrecoSalgado.textContent = `R$ ${precoSalgado.toFixed(2)}`;
        elTotalVendido.textContent = `R$ ${totalVendido.toFixed(2)}`;
        
        // Desativa o botão se acabar o estoque
        if (salgados === 0) {
            btnVender.textContent = "Salgados Esgotados!";
            btnVender.disabled = true;
        }
    }

    // --- Passo 2: Atualizando valores (com uma função) ---
    function venderSalgado() {
        if (salgados > 0) {
            // Atualize o número de salgados (usando 'let')
            salgados = salgados - 1; 
            
            // Calcule quanto a cantina ganhou (usando 'const' e 'let')
            totalVendido = totalVendido + precoSalgado;
            
            console.log(`Venda realizada! Restam ${salgados} salgados. Total vendido: R$ ${totalVendido}`);
            
            // Atualiza os números na tela
            atualizarPainel();
            
        } else {
            console.log("Não há mais salgados para vender.");
        }
    }

    // Adiciona o "ouvinte" de clique ao botão
    btnVender.addEventListener('click', venderSalgado);

    // Roda a função pela primeira vez para carregar os dados
    atualizarPainel();

    // --- Passo 3: Testes Rápidos (Rodam só no Console) ---
    console.log("--- Início dos Testes do Exercício (Passo 3) ---");

    // 1. O que acontece se tentar mudar o valor de precoSalgado?
    console.log("Testando reatribuição de 'const' (precoSalgado = 6)...");
    try {
        precoSalgado = 6; // Isso vai gerar um erro
    } catch (e) {
        console.error("ERRO CAPTURADO (const):", e.message);
    }

    // 2. O que acontece se criar outra variável com var dentro de um bloco {}?
    console.log("Testando escopo de 'var' vs 'let' em um bloco 'if'...");
    if (true) {
        var testeVar = "Sou 'var' (dentro do bloco)";
        let testeLet = "Sou 'let' (dentro do bloco)";
        console.log(testeVar); // funciona
        console.log(testeLet); // funciona
    }

    // 'var' vaza o escopo do bloco
    console.log("Acessando 'var' FORA do bloco: " + testeVar); // funciona
    
    // 'let' respeita o escopo do bloco
    console.log("Acessando 'let' FORA do bloco...");
    try {
        console.log(testeLet); // Isso vai gerar um ERRO
    } catch (e) {
        console.error("ERRO CAPTURADO (let):", e.message);
    }
    
    console.log("--- Fim dos Testes ---");
});
