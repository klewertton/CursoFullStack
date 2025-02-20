public class Sorvete {
    String sabor;
    int tamanho;
    double preco;

    public Sorvete(String sabor, int tamanho, double preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }

    public void exibirDetalhes(){
        System.out.printf("Saindo um sorvete de sabor %s, tamanho %d e de preço R$%.2f.\n", sabor, tamanho, preco);
    }
}
