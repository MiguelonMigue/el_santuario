package el_santuario.el_santuario.Entity;

import el_santuario.el_santuario.DTO.DatosActualizacionMenuDia;
import el_santuario.el_santuario.DTO.DatosMenuDia;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Entity(name="menu_dia")
@Table(name="menus_dia")
public class MenuDia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String entrada;
    private String proteina;
    private String acompanamiento;
    private String urlImagen;

    public MenuDia(DatosMenuDia datos){
        this.id = null;
        this.entrada = datos.entrada();
        this.proteina = datos.proteina();
        this.acompanamiento = datos.acompanamiento();
        this.urlImagen = datos.urlImagen();
    }

    public void actualizarInformacion(DatosActualizacionMenuDia datos){
        if(datos.entrada()!=null){
            this.entrada = datos.entrada();
        } else if (datos.proteina()!=null) {
            this.proteina = datos.proteina();
        } else if (datos.acompanamiento()!=null) {
            this.acompanamiento = datos.acompanamiento();
        } else if (datos.urlImagen()!=null) {
            this.urlImagen = datos.urlImagen();
        }
    }







}
