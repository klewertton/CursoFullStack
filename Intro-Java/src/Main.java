public class Main {
    public static void main(String[] args) {
        MaquinaDeSorvete maquina = new MaquinaDeSorvete();

        Sorvete sorteveChocolate = maquina.fabricarSovete("Chocolate", 20, 25.5);
        Sorvete sorteveMorango = maquina.fabricarSovete("Morango", 30, 29.5);
        Sorvete sorteveFlocos = maquina.fabricarSovete("Flocos", 15, 19.5);

        sorteveChocolate.exibirDetalhes();
        sorteveFlocos.exibirDetalhes();
        sorteveMorango.exibirDetalhes();





    }
}