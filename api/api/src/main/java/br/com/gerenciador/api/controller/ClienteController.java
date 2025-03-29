package br.com.gerenciador.api.controller;

import br.com.gerenciador.api.dto.ClienteRequestDTO;
import br.com.gerenciador.api.dto.ClienteRespondeDTO;
import br.com.gerenciador.api.service.ClienteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/clientes")
public class ClienteController {

    private final ClienteService clienteService;

    @PostMapping
    public ResponseEntity<ClienteRespondeDTO> criarCliente(@Valid @RequestBody ClienteRequestDTO dto){
        ClienteRespondeDTO clienteCriado = clienteService.criarCliente(dto);
        return ResponseEntity.status(201).body(clienteCriado);
    }

    @GetMapping
    public ResponseEntity<List<ClienteRespondeDTO>> listarTodosClientes () {
        return ResponseEntity.ok(clienteService.listarTodosClientes());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ClienteRespondeDTO> buscarClientePeloId(@PathVariable Long id, @Valid @RequestBody ClienteRequestDTO dto){
        return ResponseEntity.ok(clienteService.buscarClientePorId(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ClienteRespondeDTO> atualizarClientePeloId(@PathVariable Long id, @Valid @RequestBody ClienteRequestDTO dto){
        return ResponseEntity.ok(clienteService.atualizarClientePeloId(id, dto));
    }

    @DeleteMapping
    public ResponseEntity<Void> deletarClientePeloId(@PathVariable Long id){
        clienteService.deletarClientePeloId(id);
        return ResponseEntity.noContent().build();
    }

}
