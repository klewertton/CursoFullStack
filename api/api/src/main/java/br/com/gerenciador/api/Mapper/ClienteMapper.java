package br.com.gerenciador.api.Mapper;


import br.com.gerenciador.api.dto.ClienteRequestDTO;
import br.com.gerenciador.api.dto.ClienteRespondeDTO;
import br.com.gerenciador.api.model.Cliente;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ClienteMapper {

    //Converter de DTO para Entidade
    @Mapping(target = "id", ignore = true)
    Cliente toEntity(ClienteRequestDTO dto);

    //Converter da Entidade para o DTO
    ClienteRespondeDTO toDTO(Cliente cliente);
}
