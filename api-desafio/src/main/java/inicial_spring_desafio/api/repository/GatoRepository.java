package inicial_spring_desafio.api.repository;

import inicial_spring_desafio.api.model.Gato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GatoRepository extends JpaRepository<Gato, Long> {
}
