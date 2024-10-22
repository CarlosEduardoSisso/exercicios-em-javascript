/*
2. Troca de Fundo da Página
Descrição: Crie uma página com um botão que, ao ser clicado, alterna entre duas cores de fundo diferentes (ex.: branco e azul). Cada clique deve trocar a cor de fundo atual para a outra.
Dica: Use a propriedade backgroundColor para modificar o estilo do body.
*/

function changeBackgroundColor() {
    let bgColor = document.querySelector('body');
    let h1Color = document.querySelector('h1');
    if (bgColor.style.backgroundColor === 'white') {
        bgColor.style.backgroundColor = 'blue';
        h1Color.style.color = 'white'
    } else {
        bgColor.style.backgroundColor = 'white';
        h1Color.style.color = 'black'
    }
}

/*
Abaixo uma solução melhor que um bot me sugeriu na internet:

function changeBackgroundColor() {
    const bodyElement = document.querySelector('body');
    
    // Alterna entre as classes de fundo branco e fundo azul
    if (bodyElement.classList.contains('fundo-branco')) {
        bodyElement.classList.remove('fundo-branco');
        bodyElement.classList.add('fundo-azul');
    } else {
        bodyElement.classList.remove('fundo-azul');
        bodyElement.classList.add('fundo-branco');
    }
}

*/