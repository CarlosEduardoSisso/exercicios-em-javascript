/*
4. Semáforo Simples
Descrição: Simule um semáforo com três círculos de cores (vermelho, amarelo e verde). Crie um botão que, ao ser clicado, alterne a luz ativa (vermelho > amarelo > verde > vermelho).
Dica: Use classes de CSS para modificar a cor do círculo ativo com base no estado atual.
*/

// Variável que controla o estado atual (0 = vermelho, 1 = amarelo, 2 = verde)
// Variável que controla o estado atual (0 = verde, 1 = amarelo, 2 = vermelho)

let estadoAtual = 0;

function mudaCor() {
    // Pegamos as três luzes do semáforo
    const luzVerde = document.querySelector('.verde');
    const luzAmarela = document.querySelector('.amarelo');
    const luzVermelha = document.querySelector('.vermelho');
    const botao = document.querySelector('input[type="button"]');

    // Resetamos todas as luzes para opacas (apagadas)
    luzVerde.style.backgroundColor = 'rgba(0, 128, 0, 0.226)';
    luzAmarela.style.backgroundColor = 'rgba(255, 255, 0, 0.226)';
    luzVermelha.style.backgroundColor = 'rgba(255, 0, 0, 0.226)';

    // Alterna a cor ativa com base no estado atual
    if (estadoAtual === 0) {
        luzVerde.style.backgroundColor = 'rgba(0, 128, 0, 1)'; // Verde aceso
        estadoAtual = 1; // Próximo estado: Amarelo
    } else if (estadoAtual === 1) {
        luzAmarela.style.backgroundColor = 'rgba(255, 255, 0, 1)'; // Amarelo aceso
        estadoAtual = 2; // Próximo estado: Vermelho

        // Desabilita o botão e muda o texto enquanto espera
        botao.disabled = true;
        botao.value = "Aguarde...";

        // Transição automática para o vermelho após 3 segundos (3000 ms)
        setTimeout(() => {
            luzAmarela.style.backgroundColor = 'rgba(255, 255, 0, 0.226)'; // Apaga amarelo
            luzVermelha.style.backgroundColor = 'rgba(255, 0, 0, 1)'; // Acende vermelho
            estadoAtual = 0; // Volta para o estado verde (ciclo reinicia)

            // Habilita o botão novamente e restaura o texto
            botao.disabled = false;
            botao.value = "Mude a cor";
        }, 3000); // Tempo da transição entre amarelo e vermelho
    }
}
