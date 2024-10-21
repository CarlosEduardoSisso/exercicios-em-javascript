let txtn1, txtn2, n1, n2, soma;
txtn1 = window.prompt('Entre com o primeiro número');
txtn2 = window.prompt('Entre com o segundo número');
n1 = Number(txtn1);
n2 = Number(txtn2);
soma = n1 + n2;
document.getElementById('return').innerHTML = `A soma entre ${n1} e ${n2} é ${soma}.`