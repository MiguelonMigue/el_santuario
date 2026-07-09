package el_santuario.el_santuario.Entity;

import el_santuario.el_santuario.DTO.DatosBebida;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity(name = "bebida")
@Table(name = "bebidas")
public class Bebida {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String urlImagen;
    private String nombre;
    private String tipoEnvase;
    private Double precio;

    public Bebida(DatosBebida datos){
        this.id=null;
        this.urlImagen = datos.urlImagen();
        this.nombre = datos.nombre();
        this.tipoEnvase = datos.tipoEnvase();
        this.precio = datos.precio();
    }


}
