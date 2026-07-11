package el_santuario.el_santuario.Controller;

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
import org.springframework.web.bind.annotation.*;

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
    public Page<DatosBebida> list (@PageableDefault Pageable pageable){
        return repository.findAll(pageable).map(DatosListaBebida::new);
    }

}
