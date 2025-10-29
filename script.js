/**
 * Esta função é chamada quando um botão de pedido é clicado.
 * @param {string} nomeDoPrato - O nome do item que está sendo pedido.
 */
function fazerPedido(nomeDoPrato) {
    // Exibe uma mensagem simples de confirmação
    alert("Seu pedido para '" + nomeDoPrato + "' foi recebido!");

    // No futuro, você poderia expandir isso para adicionar o item a um carrinho
    // ou enviar os dados para um servidor.
}



/* --- LÓGICA DO CARROSSEL --- */

// Variáveis globais para o carrossel
let currentSlide = 0; // Controla qual slide está visível (começa no 0)
const slideContainer = document.querySelector(".carousel-slides");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Função para configurar o carrossel (só roda se ele existir na página)
if (slideContainer) {
    // 1. Define a largura do container (ex: 4 slides = 400%)
    slideContainer.style.width = (totalSlides * 100) + "%";

    // 2. Define a largura de cada slide (ex: 4 slides = 25% cada)
    slides.forEach(slide => {
        slide.style.width = (100 / totalSlides) + "%";
    });
}

/**
 * Move o carrossel para o slide correto.
 * @param {number} n - O número de slides para mover (1 para próximo, -1 para anterior)
 */
function moveSlide(n) {
    currentSlide += n;

    // Lógica de loop:
    // Se passar do último slide (ex: 4), volta ao primeiro (0)
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    // Se voltar antes do primeiro (0), vai para o último (ex: 3)
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // A mágica acontece aqui:
    // Move o container dos slides para a esquerda.
    // (ex: slide 0 = 0%, slide 1 = -25%, slide 2 = -50%, etc.)
    const moveAmount = -(currentSlide * (100 / totalSlides));
    slideContainer.style.transform = `translateX(${moveAmount}%)`;
}

// Opcional: Slide automático
// Move para o próximo slide a cada 5 segundos (5000 milissegundos)
setInterval(() => {
    // Só tenta mover se o carrossel estiver na página atual
    if (document.querySelector(".carousel")) {
         moveSlide(1); // Chama a função de mover para o próximo
    }
}, 5000);