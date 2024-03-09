// Definição da classe Animal
class Animal {
    // Construtor da classe Animal que recebe o nome e a idade como parâmetros
    constructor(nome, idade){
        // Inicializa as propriedades nome e idade com os valores recebidos
        this.nome = nome;
        this.idade = idade;
    }

    // Método descrever que imprime uma mensagem sobre o animal
    descrever() {
        console.log(`O animal ${this.nome} possui ${this.idade} anos.`);
    }
}

// Definição da classe Gato que estende a classe Animal
class Gato extends Animal {
    // Construtor da classe Gato que recebe o nome, a idade e a cor como parâmetros
    constructor(nome, idade, cor){
        // Chama o construtor da classe Animal utilizando super para inicializar nome e idade
        super(nome, idade);
        // Inicializa a propriedade cor com o valor recebido
        this.cor = cor;
    }

    // Método miar específico para a classe Gato
    miar(){
        console.log(`O ${this.nome} é ${this.cor} e faz MIAU!`);
    }
}

// Criação de uma instância da classe Animal (um cachorro chamado "Rex" com 12 anos)
const cachorro = new Animal("Rex", 12);

// Criação de uma instância da classe Gato (um gato chamado "Garfield" com 7 anos e cor "laranja")
const gato = new Gato("Garfield", 7 , "laranja");

// Chama o método descrever para mostrar informações sobre o cachorro e o gato
cachorro.descrever();
gato.descrever();

// Chama o método miar específico da classe Gato para o gato
gato.miar();
