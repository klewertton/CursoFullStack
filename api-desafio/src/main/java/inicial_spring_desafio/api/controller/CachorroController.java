package inicial_spring_desafio.api.controller;

import inicial_spring_desafio.api.model.Cachorro;
import inicial_spring_desafio.api.service.CachorroService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cachorros")
@RequiredArgsConstructor
public class CachorroController {

    private final CachorroService cachorroService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void criarCachorro(@RequestBody Cachorro cachorro){
        cachorroService.criarCachorro(cachorro);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Cachorro> exibirCachorroPeloId(@PathVariable Long id){
        return cachorroService.exibirCachorroPeloId(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Cachorro> exibirCachorros(){
        return cachorroService.exibirCachorros();
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarCachorro(@PathVariable Long id){
        cachorroService.deletarCachorro(id);
    }

    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Cachorro> atualizarCachorro(@PathVariable Long id, @RequestBody Cachorro cachorro){
        Cachorro atualizado = cachorroService.atualizarCachorro(id, cachorro);
        return ResponseEntity.ok(atualizado);
    }


}
