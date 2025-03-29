package br.com.gerenciador.api.repository;

import br.com.gerenciador.api.model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepositery extends JpaRepository<Cliente, Long> {
}
