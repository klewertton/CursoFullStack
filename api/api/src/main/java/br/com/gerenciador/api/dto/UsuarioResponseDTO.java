package br.com.gerenciador.api.dto;

import br.com.gerenciador.api.Enums.Role;

public record UsuarioResponseDTO(
    String username,
    String email,
    Role role
) {
}
