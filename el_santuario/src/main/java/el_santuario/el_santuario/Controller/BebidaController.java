package el_santuario.el_santuario.Controller;

import el_santuario.el_santuario.DTO.DatosActualizacionBebida;
import el_santuario.el_santuario.DTO.DatosBebida;
import el_santuario.el_santuario.DTO.DatosEspecial;
import el_santuario.el_santuario.DTO.DatosListaBebida;
import el_santuario.el_santuario.Entity.Bebida;
import el_santuario.el_santuario.Repository.BebidaRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.server.ResponseStatusException;

@RequestMapping("/bebida")
@RestController
public class BebidaController {
    @Autowired
    public BebidaRepository repository;

    @Transactional
    @PostMapping
    public void register(@RequestBody @Valid DatosBebida datos){
        repository.save(new Bebida(datos));
    }

    @GetMapping
    public Page<DatosListaBebida> list (@PageableDefault Pageable pageable){
        return repository.findAll(pageable).map(DatosListaBebida::new);
    }

    @GetMapping ("/{id}")
    public ResponseEntity<DatosListaBebida>detail(@PathVariable Long id){
        var bebida = repository.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Bebida no encontrada"));
        DatosListaBebida datos = new DatosListaBebida(bebida);
        return  ResponseEntity.ok(datos);
    }

@PutMapping
    public void update(@RequestBody @Valid DatosActualizacionBebida datos){
        var bebida = repository.getReferenceById(datos.id());
        bebida.actualizarInformacion(datos);
}

@DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
}
}
