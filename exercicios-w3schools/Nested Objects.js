const person1 = {
    firstName: 'Giovanna',
    lastName: 'Souza',
    age: 16,
    // Posso inserir um objeto dentro de outro objeto
    clothes: {
        camisa: 'branca',
        bermuda: 'vermelha',
        tenis: 'All Star'
        }
    }
    //As variáveis abaixo são apenas para testar um outro acesso às propriedades acima, recebendo-as como atribuição
    let roupa = 'clothes';
    let x = 'camisa';
    let y = 'bermuda';
    let z = 'tenis';

// PRIMEIRA MANEIRA (NOTAÇÃO POR PONTOS)
console.log('Uma maneira de acessar é usando a notação por ponto (vide abaixo):')
console.log(`O primeiro nome é ${person1.firstName}.`);
console.log(`O segundo nome é ${person1.lastName}.`);
console.log(`A idade da pessoa é ${person1.age} anos.`);
console.log(`${person1.firstName} está vestindo uma camisa ${person1.clothes.camisa}, uma bermuda ${person1.clothes.bermuda} e usando um tênis ${person1.clothes.tenis}.`);

// SEGUNDA MANEIRA (NOTAÇÃO POR COLCHETES)
console.log('Outra maneira é usando a notação por colchetes (vide abaixo):')
console.log(`O primeiro nome é ${person1['firstName']}.`);
console.log(`O segundo nome é ${person1['lastName']}.`);
console.log(`A idade da pessoa é ${person1['age']} anos.`);
console.log(`${person1['firstName']} está vestindo uma camisa ${person1['clothes']['camisa']}, uma bermuda ${person1['clothes']['bermuda']} e usando um tênis ${person1['clothes']['tenis']}.`);

// TERCEIRA MANEIRA (POR VARIÁVEIS E NOTAÇÃO POR COLCHETES)
console.log('Uma terceira maneira é usando as variáveis criadas no final do script e a notação por colchetes (vide abaixo):')
console.log(`O primeiro nome é ${person1['firstName']}.`);
console.log(`O segundo nome é ${person1['lastName']}.`);
console.log(`A idade da pessoa é ${person1['age']} anos.`);
console.log(`${person1['firstName']} está vestindo uma camisa ${person1[roupa][x]}, uma bermuda ${person1[roupa][y]} e usando um tênis ${person1[roupa]['tenis']}.`);
