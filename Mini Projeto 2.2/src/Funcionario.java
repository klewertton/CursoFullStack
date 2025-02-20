public class Funcionario {
    String nome;
    String cargo;
    double salario;

    public Funcionario(String nome, String cargo, double salario) {
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }

    //Exibir detalhes
    public void exibirDetalhesFuncionario(){
        System.out.printf("Funcionario: %s\nCargo: %s\nSalário: R$%.2f\n----------------------------\n", nome, cargo, salario);
    }

    public void aumentoDeSalario(double percentual){
        salario += salario * (percentual/100);
        System.out.printf("O novo salário do funcionário %s após o aumento de %.2f porcento é de R$%.2f.\n",nome, percentual, salario);
    }

}
