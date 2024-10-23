/*
3. Contador com Incremento/Decremento
Descrição: Faça uma página com um número centralizado e dois botões: "Incrementar" e "Decrementar". Cada botão deve aumentar ou diminuir o número mostrado. O número deve iniciar em 0.
Dica: Mantenha o valor atual do número em uma variável e modifique o DOM a cada clique.
*/

let numeroAtual = 0; // Variável global para armazenar o número

function iniciarContador() {
    const input = prompt("Digite um número:"); // Pede o número ao usuário
    numeroAtual = Number(input); // Converte para número e armazena na variável global
    document.getElementById('txtnum').innerHTML = numeroAtual; // Exibe o número na tela
}

function incrementar() {
    numeroAtual++; // Incrementa o valor
    document.getElementById('txtnum').innerHTML = numeroAtual; // Atualiza o valor no DOM
}

function decrementar() {
    numeroAtual--; // Decrementa o valor
    document.getElementById('txtnum').innerHTML = numeroAtual; // Atualiza o valor no DOM
}

