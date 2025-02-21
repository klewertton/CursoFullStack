package inicial_spring_desafio.api.controller;

import inicial_spring_desafio.api.model.Gato;
import inicial_spring_desafio.api.service.GatoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/gatos")
@RequiredArgsConstructor
public class GatoController {

    private final GatoService gatoService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void criarGato(@RequestBody Gato gato){
        gatoService.criarGato(gato);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Gato> exibirPeloId (@PathVariable Long id){
        return gatoService.exibirPeloId(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Gato> exibirTodosGatos (){
        return gatoService.exibirTodosGatos();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarGato(@PathVariable Long id){
        gatoService.deletarGato(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Gato> atualizarGato(@PathVariable Long id, @RequestBody Gato gato){
        Gato atualizado = gatoService.atualizarGato(id, gato);
        return ResponseEntity.ok(atualizado);
    }

}
