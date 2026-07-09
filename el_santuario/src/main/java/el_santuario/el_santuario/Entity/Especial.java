package el_santuario.el_santuario.Entity;

import el_santuario.el_santuario.DTO.DatosActualizacionEspecial;
import el_santuario.el_santuario.DTO.DatosEspecial;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity(name="especial")
@Table(name="especiales")

public class Especial {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String proteina;
    private String acompanamiento;
    private String urlImagen;

    public Especial (DatosEspecial datos){
        this.id = null;
        this.proteina = datos.proteina();
        this.acompanamiento = datos.acompanamiento();
        this.urlImagen = datos.urlImagen();
    }
    public void actualizarDatos(DatosActualizacionEspecial datos){
        if(datos.proteina()!=null){
            this.proteina = datos.proteina();
        }
        if(datos.acompanamiento()!=null){
            this.acompanamiento = datos.acompanamiento();
        }
        if(datos.urlImagen()!=null){
            this.urlImagen = datos.urlImagen();
        }
    }

}
