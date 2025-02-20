public class MaquinaDeSorvete {
    public Sorvete fabricarSovete(String sabor, int tamanho, double preco){
        System.out.printf("Preparando um sortete no sabor de %s, de tamanho %d...\n", sabor, tamanho);
        return new Sorvete(sabor, tamanho, preco);
    }


}
