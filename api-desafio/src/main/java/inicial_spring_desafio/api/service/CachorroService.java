package inicial_spring_desafio.api.service;

import inicial_spring_desafio.api.model.Cachorro;
import inicial_spring_desafio.api.repository.CachorroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CachorroService {

    private final CachorroRepository cachorroRepository;//Injeção do repositório na classe Service.

    public void criarCachorro (Cachorro cachorro){
        cachorroRepository.save(cachorro);
    }

    public Optional<Cachorro> exibirCachorroPeloId(Long id){
        return cachorroRepository.findById(id);
    }

    public List<Cachorro> exibirCachorros(){
        return cachorroRepository.findAll();
    }

    public void deletarCachorro(Long id){
        cachorroRepository.deleteById(id);
    }

    public Cachorro atualizarCachorro(Long id, Cachorro novoCachorro){
        return cachorroRepository.findById(id)
                .map(cachorro -> {
            cachorro.setNome(novoCachorro.getNome());
            cachorro.setIdade(novoCachorro.getIdade());
            cachorro.setRaca(novoCachorro.getRaca());
            return cachorroRepository.save(cachorro);
        })
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cachorro não localizado.")
        );
    }

}
