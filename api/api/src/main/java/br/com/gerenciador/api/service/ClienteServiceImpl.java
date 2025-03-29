package br.com.gerenciador.api.service;

import br.com.gerenciador.api.Mapper.ClienteMapper;
import br.com.gerenciador.api.Mapper.EnderecoMapper;
import br.com.gerenciador.api.dto.ClienteRequestDTO;
import br.com.gerenciador.api.dto.ClienteRespondeDTO;
import br.com.gerenciador.api.model.Cliente;
import br.com.gerenciador.api.model.Fornecedor;
import br.com.gerenciador.api.repository.ClienteRepositery;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepositery clienteRepositery;
    private final ClienteMapper clienteMapper;
    private final EnderecoMapper enderecoMapper;


    @Override
    public ClienteRespondeDTO criarCliente(ClienteRequestDTO dto) {
        Cliente cliente = clienteMapper.toEntity(dto);
        return clienteMapper.toDTO(clienteRepositery.save(cliente));
    }

    @Override
    public List<ClienteRespondeDTO> listarTodosClientes() {
        return clienteRepositery.findAll().stream()
                .map(clienteMapper::toDTO)
                .toList();
    }

    @Override
    public ClienteRespondeDTO buscarClientePorId(Long id) {
        Cliente cliente = clienteRepositery.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado."));
        return clienteMapper.toDTO(cliente);
    }

    @Transactional
    @Override
    public ClienteRespondeDTO atualizarClientePeloId(Long id, ClienteRequestDTO dto) {
        Cliente cliente = clienteRepositery.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente nao encontrado."));
        cliente.setNome(dto.nome());
        cliente.setCpf(dto.cpf());
        cliente.setEmail(dto.email());
        cliente.setEndereco(enderecoMapper.toEntity(dto.endereco()));
        return clienteMapper.toDTO(clienteRepositery.save(cliente));
    }

    @Transactional
    @Override
    public void deletarClientePeloId(Long id) {
        if (!clienteRepositery.existsById(id)){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente nao encontrado.");
        }
        clienteRepositery.deleteById(id);

    }
}
