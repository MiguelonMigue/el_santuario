package el_santuario.el_santuario.Controller;


import el_santuario.el_santuario.DTO.DatosActualizacionPostre;
import el_santuario.el_santuario.DTO.DatosListaMenuDia;
import el_santuario.el_santuario.DTO.DatosListaPostre;
import el_santuario.el_santuario.DTO.DatosPostre;
import el_santuario.el_santuario.Entity.Postre;
import el_santuario.el_santuario.Repository.PostreRepository;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/postre")
public class PostreController {
    @Autowired
    private PostreRepository repository;

    @Transactional
    @PostMapping
    public void register(@RequestBody @Valid DatosPostre datos){
        repository.save(new Postre(datos));
    }

    @GetMapping
    public Page<DatosListaPostre> list(@PageableDefault Pageable pageable){
        return repository.findAll(pageable)
                .map(DatosListaPostre::new);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosListaPostre>detail(@PathVariable Long id){
        var postre = repository.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Postre no encontrado"));
        DatosListaPostre datos = new DatosListaPostre(postre);
        return ResponseEntity.ok(datos);
    }

    @PutMapping
    public void update(@RequestBody @Valid DatosActualizacionPostre datos){
        var postre = repository.getReferenceById(datos.id());
        postre.updateInformation(datos);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        repository.deleteById(id);
    }
}
