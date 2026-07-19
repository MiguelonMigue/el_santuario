package el_santuario.el_santuario.DTO;

import jakarta.validation.constraints.NotNull;

public record DatosActualizacionPostre(
        @NotNull
        Long id,
        String title,
        Double price
) {
}
