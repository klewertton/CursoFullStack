public class PagamentoCartaoDeCredito implements Pagamento{

    @Override
    public void realizarPagamento(double valor) {
        System.out.printf("Pagamento no valor de R$%.2f realizado por Cartão de Crédito.\n", valor);
    }
}
