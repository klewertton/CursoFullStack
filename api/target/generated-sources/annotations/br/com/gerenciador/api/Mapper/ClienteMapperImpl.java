package br.com.gerenciador.api.Mapper;

import br.com.gerenciador.api.dto.ClienteRequestDTO;
import br.com.gerenciador.api.dto.ClienteRespondeDTO;
import br.com.gerenciador.api.dto.EnderecoDTO;
import br.com.gerenciador.api.model.Cliente;
import br.com.gerenciador.api.model.Endereco;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-03-22T15:20:58-0300",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 17.0.14 (Amazon.com Inc.)"
)
@Component
public class ClienteMapperImpl implements ClienteMapper {

    @Override
    public Cliente toEntity(ClienteRequestDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Cliente cliente = new Cliente();

        cliente.setNome( dto.nome() );
        cliente.setCpf( dto.cpf() );
        cliente.setEmail( dto.email() );
        cliente.setEndereco( enderecoDTOToEndereco( dto.endereco() ) );

        return cliente;
    }

    @Override
    public ClienteRespondeDTO toDTO(Cliente cliente) {
        if ( cliente == null ) {
            return null;
        }

        Long id = null;
        String nome = null;
        String cpf = null;
        String email = null;
        EnderecoDTO endereco = null;

        id = cliente.getId();
        nome = cliente.getNome();
        cpf = cliente.getCpf();
        email = cliente.getEmail();
        endereco = enderecoToEnderecoDTO( cliente.getEndereco() );

        ClienteRespondeDTO clienteRespondeDTO = new ClienteRespondeDTO( id, nome, cpf, email, endereco );

        return clienteRespondeDTO;
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

    protected EnderecoDTO enderecoToEnderecoDTO(Endereco endereco) {
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
