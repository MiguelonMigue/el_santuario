package el_santuario.el_santuario.Controller;


import el_santuario.el_santuario.DTO.DatosActualizacionEspecial;
import el_santuario.el_santuario.DTO.DatosEspecial;
import el_santuario.el_santuario.DTO.DatosListaEspecial;
import el_santuario.el_santuario.DTO.DatosListaMenuDia;
import el_santuario.el_santuario.Entity.Especial;
import el_santuario.el_santuario.Repository.EspecialRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/especial")
public class EspecialController {
@Autowired
    private EspecialRepository repository;

@Transactional

    @PostMapping
    public void registrar(@RequestBody @Valid DatosEspecial datos){
    repository.save(new Especial(datos));
}

@GetMapping
public Page<DatosListaEspecial>listar(@PageableDefault Pageable paginacion){
    return repository.findAll(paginacion).map(DatosListaEspecial::new);
}

@GetMapping("/{id}")
    public ResponseEntity<DatosListaEspecial>detallar(@PathVariable Long id){
    var especial = repository.findById(id)
            .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Especial no encontrado"));
DatosListaEspecial datos = new DatosListaEspecial(especial);
return ResponseEntity.ok(datos);
}

@PutMapping
    public void actualizar(@RequestBody @Valid DatosActualizacionEspecial datos){
    var especial = repository.getReferenceById(datos.id());
    especial.actualizarDatos(datos);
}

@DeleteMapping("/{id}")
public void eliminar(@PathVariable Long id){
    repository.deleteById(id);
}
}
