package el_santuario.el_santuario.DTO;

import jakarta.validation.constraints.NotNull;

public record DatosActualizacionBebida(
        @NotNull
        Long id,
        String urlImagen,
        String nombre,
        String tipoEnvase,
        Double precio
) {
}
