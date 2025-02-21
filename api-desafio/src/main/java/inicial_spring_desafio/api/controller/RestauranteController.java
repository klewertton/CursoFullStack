package inicial_spring_desafio.api.controller;

import inicial_spring_desafio.api.model.Restaurante;
import inicial_spring_desafio.api.service.RestauranteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/restaurantes")
@RequiredArgsConstructor
public class RestauranteController {

    private final RestauranteService restauranteService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void criarRestaurante (@RequestBody Restaurante restaurante){
        restauranteService.criarRestaurante(restaurante);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Restaurante> exibirRestaurantePeloId (@PathVariable Long id){
        return restauranteService.exibirRestaurantePeloId(id);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Restaurante> exibirRestauranteTodos(){
        return restauranteService.exibirTodosRestaurante();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletarRestaurante (@PathVariable Long id){
        restauranteService.deletarRestaurante(id);
    }

    @PutMapping("{id}")
    public ResponseEntity<Restaurante> atualizarRestaurante (@PathVariable Long id, @RequestBody Restaurante restaurante){
        Restaurante atualizado = restauranteService.atualizarRestaurante(id, restaurante);
        return ResponseEntity.ok(atualizado);
    }
}
