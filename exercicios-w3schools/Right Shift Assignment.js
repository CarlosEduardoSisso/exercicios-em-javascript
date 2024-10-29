/*
 The >>= Operator
The Right Shift Assignment Operator right shifts a variable (signed).
 */

/*
 O operador >>= 
 O operador de atribuição de deslocamento para a direita (ou operador de deslocamento à direita com atribuição) desloca uma variável para a direita (com sinal).

 Isso atua na representação binária do número.
 */

 let x = -100;
 x >>= 5;
 console.log(x);

 /*
Basicamente aqui, o que esse faz é dividir APROXIMADAMENTE o -100 em 2 elevado à 5ª potência (32). Essa divisão, obviamente, não é exata. Seu resultado é -3,125, porém, devido ao valor negativo e ao comportamento de sua representação binária (que preenche com 1 à esquerda), ele APROXIMA para o menor número exato ABAIXO, no caso, o -4.

Se o valor original (x, no caso) fosse positivo, a divisão seria feita exatamente, sem considerar as eventuais casas decimais decorrentes dela.
 */

let y = 100;
y >>= 4;
// Pela lógica anterior, o resultado aqui será 6, pois 100 / 2^4 = 6,25, porém o resultado será o valor exato 6 (desconsiderando os 0.25)
console.log(y);
// Deu certo!

// Mais um exemplo abaixo:
let z = 513;
z >>= 7; // 2 elevado à 7ª potência é igual a 128
// O resultado deve ser 4 (ignorando os 0.0078125 restantes da divisão)
console.log(z);
// YES! Deu certo de novo! Acho que estou entendendo!

// Mais um, agora com valor negativo:
let negative = -849;
negative >>= 6; // 2 elevado à 6ª potência é igual a 64.
// A divisão de -849 por 64 resultaria em -13,265625. Se eu entendi bem aqui, o resultado deve retornar... -14?
console.log(negative);
// YES! Eu definitivamente ENTENDI!