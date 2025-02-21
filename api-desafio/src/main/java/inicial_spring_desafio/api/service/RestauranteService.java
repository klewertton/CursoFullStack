package inicial_spring_desafio.api.service;

import inicial_spring_desafio.api.model.Restaurante;
import inicial_spring_desafio.api.repository.RestauranteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class RestauranteService {

    private final RestauranteRepository restauranteRepository;

    public void criarRestaurante (Restaurante restaurante){
        restauranteRepository.save(restaurante);
    }

    public Optional<Restaurante> exibirRestaurantePeloId(Long id){
        return restauranteRepository.findById(id);
    }

    public List<Restaurante> exibirTodosRestaurante (){
        return restauranteRepository.findAll();
    }

    public void deletarRestaurante (Long id){
        restauranteRepository.deleteById(id);
    }

    public Restaurante atualizarRestaurante (Long id, Restaurante novoRestaurante){
        return restauranteRepository.findById(id).map(restaurante -> {
            restaurante.setNome(novoRestaurante.getNome());
            restaurante.setCozinha(novoRestaurante.getCozinha());
            restaurante.setNota(novoRestaurante.getNota());
            return restauranteRepository.save(restaurante);
        })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Restaurante não localizado!")
                );
    }

}
