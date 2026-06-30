package el_santuario.el_santuario.DTO;

import jakarta.validation.constraints.NotNull;

public record DatosActualizacionMenuDia(
        @NotNull Long id,
        String entrada,
        String proteina,
        String acompanamiento,
        String urlImagen

) {
}
