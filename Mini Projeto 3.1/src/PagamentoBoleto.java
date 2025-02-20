public class PagamentoBoleto implements Pagamento {
    @Override
    public void realizarPagamento(double valor) {
        System.out.printf("Pagamento no valor de R$%.2f realizado por Boleto.\n", valor);
    }
}
