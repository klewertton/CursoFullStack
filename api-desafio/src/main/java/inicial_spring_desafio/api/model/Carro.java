package inicial_spring_desafio.api.model;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "carro")
@Entity
public class Carro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "marca", nullable = false, length = 100)
    private String marca;
    @Column(name = "modelo", nullable = false, length = 100)
    private String modelo;
    @Column(name = "ano", nullable = false)
    private int ano;
}
