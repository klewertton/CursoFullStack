package br.com.gerenciador.api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Table(name = "produto")
@Entity
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "preco", nullable = false, precision = 10, scale = 2)
    private BigDecimal preco;

    @Column(name = "descricao", length = 500)
    private String descricao;

    @Column(name = "quantidade_estoque", nullable = false)
    private Integer quantidadeEstoque;

    @ManyToOne//Muitos produtos para um fornecedor (Ex: sobe para classe (many) deste para o tipo fornecedor (one).)
    @JoinColumn(name = "fornecedor_id", nullable = false)
    private Fornecedor fornecedor;

}
