package el_santuario.el_santuario.DTO;

import el_santuario.el_santuario.Entity.MenuDia;

public record DatosListaMenuDia(
        Long id,
        String entrada,
        String proteina,
        String acompanamiento,
        String urlImagen
) {
    public DatosListaMenuDia(MenuDia menuDia){
        this(menuDia.getId(), menuDia.getEntrada(), menuDia.getProteina(),
                menuDia.getAcompanamiento(), menuDia.getUrlImagen());
    }
}
