package br.com.gerenciador.api.Mapper;

import br.com.gerenciador.api.dto.EnderecoDTO;
import br.com.gerenciador.api.model.Endereco;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface EnderecoMapper {
    //Cinversão de DTO para entidade
    Endereco toEntity(EnderecoDTO dto);

    //Conversao de entidade para DTO
    EnderecoDTO toDTO(Endereco endereco);

}
