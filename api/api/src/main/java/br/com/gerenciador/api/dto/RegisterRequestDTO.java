package br.com.gerenciador.api.dto;

import br.com.gerenciador.api.Enums.Role;

public record RegisterRequestDTO(
    String username,
    String email,
    String password,
    Role role
) {
}
