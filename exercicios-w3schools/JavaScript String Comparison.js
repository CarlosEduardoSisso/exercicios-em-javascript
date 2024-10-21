//JavaScript String Comparison

//Exemplo 1
let text1 = "A";
let text2 = "B";
let result1 = text1 < text2;
console.log(result1);

//Exemplo 2
let text3 = "Z";
let text4 = "G";
let result2 = text3 < text4;
console.log(result2)

let text5 = "20";
let text6 = "5";
let result3 = text5 < text6; // Não entendi esse resultado (resposta abaixo)
console.log(result3);

/*
Esse comportamento ocorre porque, ao comparar duas strings em JavaScript usando operadores como < ou >, a comparação é feita lexicograficamente (ou seja, por ordem alfabética dos caracteres, assim como se compara palavras em um dicionário), e não pelo valor numérico representado pelas strings.

Explicação detalhada:
Quando você faz let result3 = text5 < text6; com as variáveis text5 = "20" e text6 = "5", JavaScript compara os caracteres da string um a um, da esquerda para a direita, como faria ao ordenar palavras.

Passo a passo da comparação:

O primeiro caractere de "20" é "2", e o primeiro caractere de "5" é "5".
Comparando "2" com "5", lexicograficamente (pela tabela ASCII ou Unicode), o caractere "2" vem antes de "5". Portanto, a string "20" é considerada menor que "5", já que a comparação é feita com base na ordem dos caracteres.
*/