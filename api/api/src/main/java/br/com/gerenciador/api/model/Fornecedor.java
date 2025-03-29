package br.com.gerenciador.api.model;

import br.com.gerenciador.api.Enums.TipoFornecedorEnum;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "fornecedor")
@Entity
public class Fornecedor {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "nome", nullable = false, length = 100)
    private String nome;

    @Column(name = "cnpj", nullable = false, length = 14, unique = true, updatable = false)
    private String cnpj;

    @Column(name = "tipo_fornecedor", nullable = false)
    private TipoFornecedorEnum tipoFornecedor;

    @OneToOne(cascade = CascadeType.ALL)//Define o relacionamento entre classes one-to-one
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

    @Column(name = "criado_em", nullable = false, updatable = false)
    @CreationTimestamp
    private LocalDateTime criadoEm;

    @Column(name = "atualizado_em")
    @UpdateTimestamp
    private LocalDateTime atualizadoEm;

}
