/*
4. Semáforo Simples
Descrição: Simule um semáforo com três círculos de cores (vermelho, amarelo e verde). Crie um botão que, ao ser clicado, alterne a luz ativa (vermelho > amarelo > verde > vermelho).
Dica: Use classes de CSS para modificar a cor do círculo ativo com base no estado atual.
*/

// Variável que controla o estado atual (0 = vermelho, 1 = amarelo, 2 = verde)
let estadoAtual = 0;

function mudaCor() {
    // Pegando as três cores do semáforo
    const luzVermelha = document.querySelector('.vermelho');
    const luzAmarela = document.querySelector('.amarelo');
    const luzVerde = document.querySelector('.verde');

    // Reseta todas as luzes para opacas (apagadas)
    luzVermelha.style.backgroundColor = 'rgba(255, 0, 0, 0.226)';
    luzAmarela.style.backgroundColor = 'rgba(255, 255, 0, 0.226)';
    luzVerde.style.backgroundColor = 'rgba(0, 128, 0, 0.226)';

    //Alterna a cor ativa com base no estado atual
    if (estadoAtual === 0) {
        luzVermelha.style.backgroundColor = 'red';
        estadoAtual = 1;
    } else if (estadoAtual === 1) {
        luzAmarela.style.backgroundColor = 'yellow';
        estadoAtual = 2;
    } else {
        luzVerde.style.backgroundColor = 'green'
        estadoAtual = 0;
    }
}