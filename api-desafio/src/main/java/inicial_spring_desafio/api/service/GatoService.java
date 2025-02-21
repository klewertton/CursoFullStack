package inicial_spring_desafio.api.service;

import inicial_spring_desafio.api.model.Gato;
import inicial_spring_desafio.api.repository.GatoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GatoService {

    private final GatoRepository gatoRepository;

    public void criarGato(Gato gato){
        gatoRepository.save(gato);
    }

    public Optional<Gato> exibirPeloId(Long id){
        return gatoRepository.findById(id);
    }

    public List<Gato> exibirTodosGatos (){
        return gatoRepository.findAll();
    }

    public void deletarGato (Long id){
        gatoRepository.deleteById(id);
    }

    public Gato atualizarGato (Long id, Gato novoGato){
        return gatoRepository.findById(id)
                .map(gato -> {
                    gato.setNome(novoGato.getNome());
                    gato.setCor(novoGato.getCor());
                    gato.setPeso(novoGato.getPeso());
                    return gatoRepository.save(gato);
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Gato não localizado!")
                );
    }
}
