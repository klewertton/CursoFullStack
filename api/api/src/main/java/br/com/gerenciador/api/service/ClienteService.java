package br.com.gerenciador.api.service;

import br.com.gerenciador.api.dto.ClienteRequestDTO;
import br.com.gerenciador.api.dto.ClienteRespondeDTO;

import java.util.List;

public interface ClienteService {
    ClienteRespondeDTO criarCliente(ClienteRequestDTO dto);
    List<ClienteRespondeDTO> listarTodosClientes();
    ClienteRespondeDTO buscarClientePorId(Long id);
    ClienteRespondeDTO atualizarClientePeloId(Long id, ClienteRequestDTO dto);
    void deletarClientePeloId(Long id);

}
