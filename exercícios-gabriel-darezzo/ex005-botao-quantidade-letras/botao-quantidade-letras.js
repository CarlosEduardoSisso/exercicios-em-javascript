/*
(5) exiba a quantidade de letras que possuem o texto inserido ao clicar no botão

Exemplos de entrada e saida:
'Gabriel' // 7
'Daniel' // 6
'Ronaldo' // 7
'Dennis Ritchie' // 14 (Espaço conta)
*/

function calcular() {
    let nome = document.querySelector('input#txtnome');
    let carac = nome.value.length;
    let res = document.querySelector('p#resposta');
    //res.innerHTML = `${nome}`
    res.innerHTML = `O nome <strong>${nome.value}</strong> tem ${carac} caracteres.`
}