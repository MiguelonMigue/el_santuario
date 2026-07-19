package el_santuario.el_santuario.Entity;


import el_santuario.el_santuario.DTO.DatosActualizacionPostre;
import el_santuario.el_santuario.DTO.DatosPostre;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity(name="postre")
@Table(name="postres")
public class Postre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Double price;

    public Postre(DatosPostre datos){
        this.id = null;
        this.title = datos.title();
        this.price = datos.price()
    }

    public void updateInformation(DatosActualizacionPostre datos){

    }


}
