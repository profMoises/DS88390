// Inicializa a variável que controla qual luz está acesa
let luzAtual = 0; // 0 - Vermelho, 1 - Amarelo, 2 - Verde

// Função que muda as luzes do semáforo
function mudarLuz() {
    // Obtém as luzes pelos seus IDs
    const vermelho = document.getElementById('vermelho');
    const amarelo = document.getElementById('amarelo');
    const verde = document.getElementById('verde');


   
    // Verifica qual luz deve estar acesa
    if (luzAtual === 0) {
        vermelho.classList.add('active'); // Acende a luz vermelha
    } else if (luzAtual === 1) {
        amarelo.classList.add('active'); // Acende a luz amarela
    } else if (luzAtual === 2) {
        verde.classList.add('active'); // Acende a luz verde
    }

    // Atualiza para a próxima luz (cíclico: 0 -> 1 -> 2 -> 0)
    luzAtual = (luzAtual + 1) % 3; // Garante que vai voltar para o 0 após o 2
}

// Chama a função mudarLuz a cada 2 segundos
setInterval(mudarLuz, 2000); // Troca de luz a cada 2000ms (2 segundos)
