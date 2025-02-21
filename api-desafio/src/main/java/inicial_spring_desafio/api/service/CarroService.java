package inicial_spring_desafio.api.service;

import inicial_spring_desafio.api.model.Carro;
import inicial_spring_desafio.api.repository.CarroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CarroService {

    private final CarroRepository carroRepository;

    public List<Carro> criarCarro(List<Carro> carros){
        return carroRepository.saveAll(carros);
    }

    public Optional<Carro> exibirCarroPeloId (Long id){
        return carroRepository.findById(id);
    }

    public List<Carro> exibirTodosCarros (){
        return carroRepository.findAll();
    }

    public void deletarCarro (Long id){
        carroRepository.deleteById(id);
    }

    public Carro atualizarCarro (Long id, Carro carroAtualizado){
        return carroRepository.findById(id)
            .map(carro -> {
            carro.setModelo(carroAtualizado.getModelo());
            carro.setMarca(carroAtualizado.getMarca());
            carro.setAno(carroAtualizado.getAno());
            return carroRepository.save(carro);
        })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Carro não localizado!")
        );
    }

}
