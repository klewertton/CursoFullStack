package br.com.gerenciador.api.Mapper;

import br.com.gerenciador.api.Enums.TipoFornecedorEnum;
import br.com.gerenciador.api.dto.EnderecoDTO;
import br.com.gerenciador.api.dto.FornecedorResponseDTO;
import br.com.gerenciador.api.dto.ProdutoRequestDTO;
import br.com.gerenciador.api.dto.ProdutoResponseDTO;
import br.com.gerenciador.api.model.Fornecedor;
import br.com.gerenciador.api.model.Produto;
import java.math.BigDecimal;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-03-22T15:20:58-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.14 (Amazon.com Inc.)"
)
@Component
public class ProdutoMapperImpl implements ProdutoMapper {

    @Override
    public Produto toEntity(ProdutoRequestDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Produto produto = new Produto();

        produto.setNome( dto.nome() );
        produto.setPreco( dto.preco() );
        produto.setDescricao( dto.descricao() );
        produto.setQuantidadeEstoque( dto.quantidadeEstoque() );

        return produto;
    }

    @Override
    public ProdutoResponseDTO toDTO(Produto produto) {
        if ( produto == null ) {
            return null;
        }

        Long id = null;
        String nome = null;
        BigDecimal preco = null;
        String descricao = null;
        Integer quantidadeEstoque = null;
        FornecedorResponseDTO fornecedor = null;

        id = produto.getId();
        nome = produto.getNome();
        preco = produto.getPreco();
        descricao = produto.getDescricao();
        quantidadeEstoque = produto.getQuantidadeEstoque();
        fornecedor = fornecedorToFornecedorResponseDTO( produto.getFornecedor() );

        ProdutoResponseDTO produtoResponseDTO = new ProdutoResponseDTO( id, nome, preco, descricao, quantidadeEstoque, fornecedor );

        return produtoResponseDTO;
    }

    protected FornecedorResponseDTO fornecedorToFornecedorResponseDTO(Fornecedor fornecedor) {
        if ( fornecedor == null ) {
            return null;
        }

        Long id = null;
        String nome = null;
        String cnpj = null;
        TipoFornecedorEnum tipoFornecedor = null;

        id = fornecedor.getId();
        nome = fornecedor.getNome();
        cnpj = fornecedor.getCnpj();
        tipoFornecedor = fornecedor.getTipoFornecedor();

        EnderecoDTO enderecoDTO = null;

        FornecedorResponseDTO fornecedorResponseDTO = new FornecedorResponseDTO( id, nome, cnpj, tipoFornecedor, enderecoDTO );

        return fornecedorResponseDTO;
    }
}
