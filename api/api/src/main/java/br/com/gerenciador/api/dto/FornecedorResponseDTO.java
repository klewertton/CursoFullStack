package br.com.gerenciador.api.dto;

import br.com.gerenciador.api.Enums.TipoFornecedorEnum;

public record FornecedorResponseDTO(
        Long id,
        String nome,
        String cnpj,
        TipoFornecedorEnum tipoFornecedor,
        EnderecoDTO enderecoDTO
) {
}
