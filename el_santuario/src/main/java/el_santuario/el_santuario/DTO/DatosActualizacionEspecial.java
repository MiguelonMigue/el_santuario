package el_santuario.el_santuario.DTO;

import jakarta.validation.constraints.NotNull;

public record DatosActualizacionEspecial(
        @NotNull
        Long id,
        String proteina,
        String acompanamiento,
        String urlImagen
) {
}
