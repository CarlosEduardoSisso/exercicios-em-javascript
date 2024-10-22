/* 
(6) No seu HTML exiba a imagem de uma lampada, ao clicar em cima da lampada, troque o src dela para a lampada que está acessa.
//SRC da Lampada (apagada)  
https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true  

//SRC da Lampada (acessa)  
https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true
*/

function changeStatus() {
    const lampada = document.getElementById("lampada");
    const lampadaApagada = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";
    const lampadaAcesa = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
    
    // Verifica o estado atual e alterna
    if (lampada.src === lampadaApagada) {
        lampada.src = lampadaAcesa; // Acende a lâmpada
    } else {
        lampada.src = lampadaApagada; // Apaga a lâmpada
    }
}
