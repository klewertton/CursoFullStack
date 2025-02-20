package inicial_spring_desafio.api.repository;

import inicial_spring_desafio.api.model.Cachorro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CachorroRepository extends JpaRepository<Cachorro, Long> {
}
