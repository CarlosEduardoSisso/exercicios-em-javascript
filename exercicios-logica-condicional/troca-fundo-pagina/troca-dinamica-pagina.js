/*

PARA FINS DIDÁTICOS:

Pedi ao Code Copilot para gerar uma página que permitisse
ao usuário alterar a cor do site por escolha própria, a partir
de um botão de cor.
Esse foi o resultado.

*/

function changeBackgroundColor() {
    // Seleciona o elemento <body> e o input de cor
    const bodyElement = document.querySelector('body');
    const colorPicker = document.getElementById('colorPicker');

    // Aplica a cor selecionada ao fundo do body
    bodyElement.style.backgroundColor = colorPicker.value;
}