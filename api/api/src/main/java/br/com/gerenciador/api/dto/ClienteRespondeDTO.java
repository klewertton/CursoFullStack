package br.com.gerenciador.api.dto;

public record ClienteRespondeDTO(

        Long id,
        String nome,
        String cpf,
        String email,
        EnderecoDTO endereco

) {
}
