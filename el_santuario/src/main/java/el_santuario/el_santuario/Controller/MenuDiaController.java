package el_santuario.el_santuario.Controller;

import el_santuario.el_santuario.DTO.DatosActualizacionMenuDia;
import el_santuario.el_santuario.DTO.DatosListaMenuDia;
import el_santuario.el_santuario.DTO.DatosMenuDia;
import el_santuario.el_santuario.Entity.MenuDia;
import el_santuario.el_santuario.Repository.MenuDiaRepository;
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
@RequestMapping("/menuDia")
public class MenuDiaController {
    @Autowired
    private MenuDiaRepository repository;

    @Transactional
    @PostMapping
    public void registrar(@RequestBody @Valid DatosMenuDia datos){
        repository.save(new MenuDia(datos));
    }

    @GetMapping
    public Page<DatosListaMenuDia> listar(@PageableDefault Pageable paginacion){
        return repository.findAll(paginacion)
                .map(DatosListaMenuDia::new);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DatosListaMenuDia>detallar(@PathVariable Long id){
        var menuDia = repository.findById(id)
                .orElseThrow(()->new ResponseStatusException(HttpStatus.NOT_FOUND, "Menú del día no encontrado"));
        DatosListaMenuDia datos = new DatosListaMenuDia(menuDia);
        return ResponseEntity.ok(datos);
    }

    @PutMapping
    public void actualizar(@RequestBody @Valid DatosActualizacionMenuDia datos){
        var menuDia = repository.getReferenceById(datos.id());
        menuDia.actualizarInformacion(datos);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        repository.deleteById(id);
    }
}
