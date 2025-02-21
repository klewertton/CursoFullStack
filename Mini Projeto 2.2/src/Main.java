public class Main {
    public static void main(String[] args) {

        Funcionario funcionario1 = new Funcionario("Carlos", "Assistente", 2500.00);
        Funcionario funcionario2 = new Funcionario("Danielle", "Coordenadora", 3000.00);
        Funcionario funcionario3 = new Funcionario("Wendel", "Ti", 3500.00);

        funcionario1.exibirDetalhesFuncionario();
        funcionario2.exibirDetalhesFuncionario();
        funcionario3.exibirDetalhesFuncionario();

        funcionario1.aumentoDeSalario(20.00);
        funcionario2.aumentoDeSalario(15.00);
        funcionario3.aumentoDeSalario(5.50);




    }
}