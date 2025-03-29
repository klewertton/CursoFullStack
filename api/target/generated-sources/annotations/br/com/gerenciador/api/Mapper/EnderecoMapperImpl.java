package br.com.gerenciador.api.Mapper;

import br.com.gerenciador.api.dto.EnderecoDTO;
import br.com.gerenciador.api.model.Endereco;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-03-22T15:20:58-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.14 (Amazon.com Inc.)"
)
@Component
public class EnderecoMapperImpl implements EnderecoMapper {

    @Override
    public Endereco toEntity(EnderecoDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Endereco endereco = new Endereco();

        endereco.setLogradouro( dto.logradouro() );
        endereco.setNumero( dto.numero() );
        endereco.setComplemento( dto.complemento() );
        endereco.setBairro( dto.bairro() );
        endereco.setCidade( dto.cidade() );
        endereco.setEstado( dto.estado() );
        endereco.setPais( dto.pais() );
        endereco.setCep( dto.cep() );

        return endereco;
    }

    @Override
    public EnderecoDTO toDTO(Endereco endereco) {
        if ( endereco == null ) {
            return null;
        }

        String logradouro = null;
        String numero = null;
        String complemento = null;
        String bairro = null;
        String cidade = null;
        String estado = null;
        String pais = null;
        String cep = null;

        logradouro = endereco.getLogradouro();
        numero = endereco.getNumero();
        complemento = endereco.getComplemento();
        bairro = endereco.getBairro();
        cidade = endereco.getCidade();
        estado = endereco.getEstado();
        pais = endereco.getPais();
        cep = endereco.getCep();

        EnderecoDTO enderecoDTO = new EnderecoDTO( logradouro, numero, complemento, bairro, cidade, estado, pais, cep );

        return enderecoDTO;
    }
}
