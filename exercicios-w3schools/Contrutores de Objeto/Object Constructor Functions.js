        // Função Construtora para um objeto "Pessoa"
        function Pessoa(primeiro, sobrenome, ultimo, idade, altura, olhos) {
            this.primeiroNome = primeiro;
            this.sobrenome = sobrenome;
            this.ultimoNome = ultimo;
            this.idade = idade;
            this.altura = altura;
            this.olhos = olhos;
        }

        // Criando o objeto "Pessoa"
        const meuPai = new Pessoa('Sebastião ', 'de Souza ', 'Filho', 74, '1.60', 'castanhos');

        // Mostrar informações da "Pessoa"
        document.getElementById('demo').innerHTML = `Meu pai -- que foi o cara mais incrível que eu conheci -- se chamava ` + meuPai.primeiroNome + meuPai.sobrenome + meuPai.ultimoNome + `.<br> Sinto muita falta dele.<br> Ele tinha ` + meuPai.idade + ` anos quando morreu. Media ` + meuPai.altura + `m de altura, e tinha olhos ` + meuPai.olhos + `.`
