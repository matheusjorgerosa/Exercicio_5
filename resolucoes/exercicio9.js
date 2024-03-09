// Definição da classe SomadorDeNotas
class SomadorDeNotas {
    // Construtor da classe, inicializa a propriedade 'total' com zero
    constructor(){
        this.total = 0;
    }

    // Método para adicionar uma nota ao total
    adicionarNota(nota){
        // Incrementa o total com a nota fornecida como parâmetro
        this.total += nota;
    }

    // Método para exibir o total acumulado das notas
    verTotal(){
        console.log(this.total);
    }
}

// Criação de uma instância da classe SomadorDeNotas
somador = new SomadorDeNotas;

// Adição de várias notas ao somador
somador.adicionarNota(7);
somador.adicionarNota(2);
somador.adicionarNota(3);
somador.adicionarNota(4);

// Exibição do total acumulado das notas
somador.verTotal();
