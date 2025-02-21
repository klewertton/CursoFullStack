import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
//        Pagamento pagamento1 = new PagamentoBoleto();
//        Pagamento pagamento2 = new PagamentoPix();
//        Pagamento pagamento3 = new PagamentoCartaoDeCredito();
//
//        pagamento1.realizarPagamento(100.50);
//        pagamento2.realizarPagamento(1500.56);
//        pagamento3.realizarPagamento(2324.89);

        Scanner scanner = new Scanner(System.in);

        //Exibir o tipo de pagamento a ser escolhido.
        System.out.println("Escolha o tipo de pagamento:\n");
        System.out.println("1 - Boleto");
        System.out.println("2 - Cartão de Crédito");
        System.out.println("3 - Pix");

        int escolha = scanner.nextInt();
        scanner.nextLine();

        System.out.println("Digite o valor a ser pago:");
        int forma = scanner.nextInt();
        scanner.nextLine();

        Pagamento pagamento = null;

        switch (escolha){
            case 1:
                pagamento = new PagamentoBoleto();
                break;
            case 2:
                pagamento = new PagamentoCartaoDeCredito();
                break;
            case 3:
                pagamento = new PagamentoPix();
                break;
            default:
                System.out.println("Opção inválida.");
                System.exit(0);
        }

        pagamento.realizarPagamento(forma);

    }
}