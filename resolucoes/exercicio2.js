class Veiculo {
    constructor(marca){
        this.marca = marca;
    }
}

class Carro extends Veiculo {
    ligar(){
        console.log("Carro Ligado!");
    }
}

let carro = new Carro("Toyota");
carro.ligar();