package inicial_spring_desafio.api.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "cachorro")
@Entity
public class Cachorro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "nome", nullable = false, length = 100)
    private String nome;
    @Column(name = "idade", nullable = false)
    private int idade;
    @Column(name = "raca", nullable = false, length = 50)
    private String raca;
}
