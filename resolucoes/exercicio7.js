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

// Criação de duas instâncias da classe Animal (um cachorro e um gato)
let cachorro = new Animal("Rex", 12);
let gato = new Animal("Garfield", 7);

// Chama o método descrever para mostrar informações sobre cada animal
cachorro.descrever();
gato.descrever();
