package inicial_spring_desafio.api.controller;

import inicial_spring_desafio.api.model.Carro;
import inicial_spring_desafio.api.service.CachorroService;
import inicial_spring_desafio.api.service.CarroService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
@RequestMapping("/carros")
public class CarroController {

    private final CarroService carroService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<List<Carro>> criarCarro (@RequestBody List<Carro> carros){
        List<Carro> todos = carroService.criarCarro(carros);
        return ResponseEntity.status(HttpStatus.CREATED).body(todos);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Carro> buscarCarroPeloId(@PathVariable Long id){
        return carroService.exibirCarroPeloId(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Carro> exibirTodosCarros (){
        return carroService.exibirTodosCarros();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarCarro (@PathVariable Long id){
        carroService.deletarCarro(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Carro> atualizarCarro (@PathVariable Long id, @RequestBody Carro carro){
        Carro atualizado = carroService.atualizarCarro(id, carro);
        return ResponseEntity.ok(atualizado);
    }


}
