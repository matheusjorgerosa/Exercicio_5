// Definição da classe Funcionario
class Funcionario {
    // Construtor da classe Funcionario que recebe nome, idade e salário base como parâmetros
    constructor(nome, idade, salario_base){
        // Inicializa as propriedades nome, idade e salario_base com os valores recebidos
        this.nome = nome;
        this.idade = idade;
        this.salario_base = salario_base;
    }
}

// Definição da classe Professor que estende a classe Funcionario
class Professor extends Funcionario {
    // Construtor da classe Professor que recebe nome, idade, salário base, disciplina e horas de aula como parâmetros
    constructor(nome, idade, salario_base, disciplina, horas_aula){
        // Chama o construtor da classe Funcionario utilizando super para inicializar nome, idade e salario_base
        super(nome, idade, salario_base);
        // Inicializa as propriedades disciplina e horas_aula com os valores recebidos
        this.disciplina = disciplina;
        this.horas_aula = horas_aula;
    }

    // Método calcularSalario específico para a classe Professor
    calcularSalario(){
        // Calcula o salário do professor com base no salário base, disciplina e horas de aula
        this.total_salario = this.salario_base + (4 * this.horas_aula * 80); // 80 -> valor arbitrário de valor hora aula.
        // Exibe uma mensagem no console com informações sobre o professor e seu salário
        return console.log(`O(A) professor(a) ${this.nome} de ${this.disciplina} possui ${this.idade} anos e recebe ${this.total_salario} mensalmente.`);
    }
}

// Criação de duas instâncias da classe Professor com valores específicos
const professor1 = new Professor("Edvaldo", 53, 2000, "Ciências", 8);
const professor2 = new Professor("Rosana", 49, 2600, "História", 8);

// Chama o método calcularSalario para cada professor, exibindo informações sobre o salário de cada um
professor1.calcularSalario();
professor2.calcularSalario();
