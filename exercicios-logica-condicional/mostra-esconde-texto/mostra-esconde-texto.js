/*
1. Botão de Mostra/Esconde Texto
Descrição: Crie uma página com um parágrafo de texto oculto inicialmente. Ao clicar em um botão "Mostrar", o texto deve aparecer, e o botão deve mudar para "Esconder". Ao clicar em "Esconder", o texto deve ser ocultado novamente.
Dica: Use o atributo display do CSS para controlar a visibilidade.
*/

function esconderRevelar() {
    const texto = document.getElementById('txt');
    const botao = document.querySelector('input[type="button"]');
    if (texto.style.display === 'none') {
        texto.style.display = 'block';
        botao.value = 'Esconder Texto';
    } else {
        texto.style.display = 'none';
        botao.value = 'Mostrar Texto'
    }
}