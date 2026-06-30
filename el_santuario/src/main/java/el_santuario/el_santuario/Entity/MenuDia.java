package el_santuario.el_santuario.Entity;

import jakarta.persistence.*;

@Entity(name="menu_dia")
@Table(name="menus_dia")
public class MenuDia {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String entrada;
    private String proteina;
    private String acompanamiento;



    public MenuDia() {
    }

    public MenuDia(Long id, String entrada, String proteina, String acompanamiento) {
        this.id = id;
        this.entrada = entrada;
        this.proteina = proteina;
        this.acompanamiento = acompanamiento;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEntrada() {
        return entrada;
    }

    public void setEntrada(String entrada) {
        this.entrada = entrada;
    }

    public String getProteina() {
        return proteina;
    }

    public void setProteina(String proteina) {
        this.proteina = proteina;
    }

    public String getAcompanamiento() {
        return acompanamiento;
    }

    public void setAcompanamiento(String acompanamiento) {
        this.acompanamiento = acompanamiento;
    }
}
