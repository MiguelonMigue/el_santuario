package el_santuario.el_santuario.Repository;

import el_santuario.el_santuario.Entity.Bebida;
import el_santuario.el_santuario.Entity.Especial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BebidaRepository extends JpaRepository<Bebida,Long> {
}
