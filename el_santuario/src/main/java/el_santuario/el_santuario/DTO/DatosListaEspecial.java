package el_santuario.el_santuario.DTO;

import el_santuario.el_santuario.Entity.Especial;

public record DatosListaEspecial(
        Long id,
        String proteina,
        String acompanamiento,
        String urlImagen

) {
public DatosListaEspecial(Especial especial){
    this(especial.getId(), especial.getProteina(), especial.getAcompanamiento(), especial.getUrlImagen());
}
}
