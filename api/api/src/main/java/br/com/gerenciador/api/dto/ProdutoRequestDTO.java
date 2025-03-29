package br.com.gerenciador.api.dto;

import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.beans.XMLEncoder;
import java.math.BigDecimal;

public record ProdutoRequestDTO (
        @NotBlank(message = "Nome é obrigatório.")
        String nome,

        @NotNull(message = "Preço é obrigatório.")
        @DecimalMin(value = "0.0", inclusive = false, message = "O preço deve ser maior do que zero.")
        BigDecimal preco,

        String descricao,

        @NotNull(message = "Quantidade de estoque é obrigatório.")
        Integer quantidadeEstoque,

        Long fornecedorId
){
}
