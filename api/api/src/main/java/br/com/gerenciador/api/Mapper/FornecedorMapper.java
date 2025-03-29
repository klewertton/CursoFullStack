package br.com.gerenciador.api.Mapper;

import br.com.gerenciador.api.dto.FornecedorRequestDTO;
import br.com.gerenciador.api.dto.FornecedorResponseDTO;
import br.com.gerenciador.api.model.Fornecedor;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface FornecedorMapper {
    //Conversor de DTO para Entidade
    @Mapping(target = "id", ignore = true)
    Fornecedor toEntity(FornecedorRequestDTO dto);

  //Conversou da entidade para DTO
  FornecedorResponseDTO toDTO(Fornecedor fornecedor);

}
