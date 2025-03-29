package br.com.gerenciador.api.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record EnderecoDTO(
        @NotBlank(message = "Logradouro é obrigatório.")
        @Size(max = 150)
        String logradouro,

        @NotBlank(message = "Número é obrigatório.")
        @Size(max = 10)
        String numero,

        @Size(max = 50)
        String complemento,

        @NotBlank(message = "Bairro é obrigatório.")
        @Size(max = 50)
        String bairro,

        @NotBlank(message = "Cidade é obrigatório.")
        @Size(max = 50)
        String cidade,

        @NotBlank(message = "Estado é obrigatório.")
        @Size(max = 50)
        String estado,

        @NotBlank(message = "País é obrigatório.")
        @Size(max = 50)
        String pais,

        @NotBlank(message = "CEP é obrigatório.")
        @Size(max = 20)
        String cep
) {
}
