package el_santuario.el_santuario.DTO;

import el_santuario.el_santuario.Entity.Postre;

public record DatosListaPostre(
        Long id,
        String title,
        Double price
) {
    public DatosListaPostre (Postre postre){
        this(postre.getId(), postre.getTitle(), postre.getPrice());
    }
}
