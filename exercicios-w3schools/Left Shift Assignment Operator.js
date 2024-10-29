/*
The <<= Operator
The Left Shift Assignment Operator left shifts a variable.
*/

/*
O operador <<= 
O operador de atribuição de deslocamento para a esquerda (ou operador de deslocamento bit a bit à esquerda com atribuição) desloca uma variável para a esquerda.

Isso atua na representação binária do número.
*/


let x = -100;
x <<= 5;
console.log(x);

/*
Basicamente o que esse operador está fazendo é multiplicando o valor de x (-100) por "2 elevado a 5", que é igual a 32, mantendo o sinal.
*/

let y = 200;
y <<= 3;
// Pela lógica anterior, o resultado abaixo será 200 * 2³ = 1600
console.log(y)
// Deu certo!