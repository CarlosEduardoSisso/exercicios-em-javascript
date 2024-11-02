        // Função Construtora para um objeto "Pessoa"
        function Pessoa (primeiro, sobrenome, ultimo, idade, altura, olhos) {
            this.primeiroNome = primeiro;
            this.sobrenome = sobrenome;
            this.ultimoNome = ultimo;
            this.idade = idade;
            this.altura = altura;
            this.olhos = olhos;
            this.nomeCompleto = function() {
                return this.primeiroNome + ' ' + this.sobrenome + ' ' + this.ultimoNome;
            };
        }

        // Criando o objeto "Pessoa"
        /* MÉTODO MENOS RECOMENDADO
        const meuPai = new Pessoa('Sebastião ', 'de Souza ', 'Filho', 74, '1.60', 'castanhos');
        */

        // MÉTODO MAIS RECOMENDADO
        const meuPai = {primeiro: 'Sebatião ', sobrenome: 'de Souza ', ultimo: 'Filho', idade: 74, altura: '1,60', olhos: 'castanhos'};


        // Mostrar informações da "Pessoa"
        document.getElementById('demo').innerHTML = `Meu pai -- que foi o cara mais incrível que eu conheci -- se chamava ` + meuPai.primeiroNome + meuPai.sobrenome + meuPai.ultimoNome + `.<br> Sinto muita falta dele.<br> Ele tinha ` + meuPai.idade + ` anos quando morreu. Media ` + meuPai.altura + `m de altura, e tinha olhos ` + meuPai.olhos + `.`

        //Criando outros objetos "Pessoa"
        const minhaMae = new Pessoa ('Rosa', 'da Silva', 'Souza', 71, '1,55', 'castanhos');
        const euMesmo = new Pessoa ('Carlos Eduardo', 'da Silva', 'Souza', 50, '1,67', 'castanhos');
        const primeiraFilha = new Pessoa ('Claudia Cristina', 'da Silva', 'Souza', 47, '1,60', 'castanhos');
        const segundaFilha = new Pessoa ('Miriam Cristina', 'da Silva', 'Souza', 38, '1,63', 'castanhos');
        const terceiraFilha = new Pessoa ('Miriane Cristina', 'da Silva', 'Souza', 37, '1,64', 'castanhos');

        //Adicionando novas propriedades aos objetos

        /* MÉTODO MENOS RECOMENDADO
        meuPai.time = 'Cruzeiro';
        euMesmo.time = 'Cruzeiro';
        segundaFilha.time = 'Cruzeiro';
        terceiraFilha.time = 'Cruzeiro';
         */

        // MÉTODO MAIS RECOMENDADO
        Pessoa.prototype.time = function () {
            return this.time = "Cruzeiro";
        };

        document.getElementById("demo1").innerHTML = minhaMae.primeiroNome + ' ' + minhaMae.sobrenome + ' ' + minhaMae.ultimoNome + ', ' + minhaMae.idade + ' anos, ' + minhaMae.altura + ' de altura, tem também olhos ' + minhaMae.olhos + ', mas não torce para time nenhum.'

        document.getElementById("demo2").innerHTML = primeiraFilha.primeiroNome + ' ' + primeiraFilha.sobrenome + ' ' + primeiraFilha.ultimoNome + ', ' + primeiraFilha.idade + ' anos, ' + primeiraFilha.altura + ' de altura, tem também olhos ' + primeiraFilha.olhos + ', mas não torce para time nenhum.'

        document.getElementById("demo3").innerHTML = segundaFilha.primeiroNome + ' ' + segundaFilha.sobrenome + ' ' + segundaFilha.ultimoNome + ', ' + segundaFilha.idade + ' anos, ' + segundaFilha.altura + ' de altura, tem também olhos ' + segundaFilha.olhos + ', e torce para o ' + segundaFilha.time()

        document.getElementById("demo4").innerHTML = terceiraFilha.primeiroNome + ' ' + terceiraFilha.sobrenome + ' ' + terceiraFilha.ultimoNome + ', ' + terceiraFilha.idade + ' anos, ' + terceiraFilha.altura + ' de altura, tem também olhos ' + terceiraFilha.olhos + ', e torce para o ' + terceiraFilha.time()

        // Acrescentando um método ao meu objeto e mostrando
        document.getElementById('demo5').innerHTML = `Meu nome completo é ` + euMesmo.nomeCompleto() + ', tenho ' + euMesmo.idade + ' anos, meço ' + euMesmo.altura + ' de altura, tenho também olhos ' + euMesmo.olhos + 'e, graças a Deus, também torço para o ' + euMesmo.time()


