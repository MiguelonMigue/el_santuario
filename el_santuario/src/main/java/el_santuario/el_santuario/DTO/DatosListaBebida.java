package el_santuario.el_santuario.DTO;

import el_santuario.el_santuario.Entity.Bebida;

public record DatosListaBebida(
        Long id,
        String urlImagen,
        String nombre,
        String tipoEnvase,
        Double precio
) {
    public DatosListaBebida(Bebida bebida){
        this(bebida.getId(), bebida.getUrlImagen(), bebida.getNombre(), bebida.getTipoEnvase(),
                bebida.getPrecio());
    }
}
