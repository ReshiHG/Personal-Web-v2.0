import { Hero } from "./components/common/Hero";
import { Menu } from "./components/common/Menu";
import { SectionCards } from "./components/common/SectionCards";
import logoSVG from "/src/assets/Logo-jr-fc.svg?url";
export function App() {
  return (
    <>
      <Menu
        marcaText={"J. Ricardo"}
        logoSVG={logoSVG}
        sections={[
          { sectionName: "Sobre mi", active: true },
          { sectionName: "Tecnologías", active: false },
          { sectionName: "Proyectos", active: false },
          { sectionName: "¿Qué hago?", active: false },
          { sectionName: "Contacto", active: false },
        ]}
      />
      <Hero />
      <SectionCards sectionId={"Tecnologías"} />
      <p className="h-dvh">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        maiores molestiae minima eos rerum debitis, corrupti, quo ducimus at
        unde eius nobis adipisci atque eaque ad ab dicta necessitatibus soluta.
      </p>
    </>
  );
}
