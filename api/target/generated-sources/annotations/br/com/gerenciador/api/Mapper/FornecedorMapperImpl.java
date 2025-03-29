package br.com.gerenciador.api.Mapper;

import br.com.gerenciador.api.Enums.TipoFornecedorEnum;
import br.com.gerenciador.api.dto.EnderecoDTO;
import br.com.gerenciador.api.dto.FornecedorRequestDTO;
import br.com.gerenciador.api.dto.FornecedorResponseDTO;
import br.com.gerenciador.api.model.Endereco;
import br.com.gerenciador.api.model.Fornecedor;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-03-22T15:20:58-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.14 (Amazon.com Inc.)"
)
@Component
public class FornecedorMapperImpl implements FornecedorMapper {

    @Override
    public Fornecedor toEntity(FornecedorRequestDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Fornecedor fornecedor = new Fornecedor();

        fornecedor.setNome( dto.nome() );
        fornecedor.setCnpj( dto.cnpj() );
        fornecedor.setTipoFornecedor( dto.tipoFornecedor() );
        fornecedor.setEndereco( enderecoDTOToEndereco( dto.endereco() ) );

        return fornecedor;
    }

    @Override
    public FornecedorResponseDTO toDTO(Fornecedor fornecedor) {
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

    protected Endereco enderecoDTOToEndereco(EnderecoDTO enderecoDTO) {
        if ( enderecoDTO == null ) {
            return null;
        }

        Endereco endereco = new Endereco();

        endereco.setLogradouro( enderecoDTO.logradouro() );
        endereco.setNumero( enderecoDTO.numero() );
        endereco.setComplemento( enderecoDTO.complemento() );
        endereco.setBairro( enderecoDTO.bairro() );
        endereco.setCidade( enderecoDTO.cidade() );
        endereco.setEstado( enderecoDTO.estado() );
        endereco.setPais( enderecoDTO.pais() );
        endereco.setCep( enderecoDTO.cep() );

        return endereco;
    }
}
