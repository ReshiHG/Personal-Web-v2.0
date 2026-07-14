import { Hero } from "./components/common/Hero";
import { Menu } from "./components/common/Menu";
import { SectionCards } from "./components/common/SectionCards";
import logoSVG from "/src/assets/Logo-jr-fc.svg?url";
import { SectionCarousel } from "./components/common/SectionCarousel";

export function App() {
  return (
    <>
      <Menu
        marcaText={"J. Ricardo"}
        logoSVG={logoSVG}
        sections={[
          {
            title: "Inicio",
          },
          {
            title: "Sobre mi",
            hideDesk: true,
          },
          {
            title: "Tecnologías",
          },
          {
            title: "Proyectos",
          },
          {
            title: "¿Qué hago?",
          },
          {
            title: "Contacto",
          },
        ]}
      />
      <Hero sectionIdMobile="Sobre mi" sectionIdDesktop="Inicio" />
      <SectionCards sectionId={"Tecnologías"} />
      <SectionCarousel sectionId={"Proyectos"} />
      <p className="h-dvh">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        maiores molestiae minima eos rerum debitis, corrupti, quo ducimus at
        unde eius nobis adipisci atque eaque ad ab dicta necessitatibus soluta.
      </p>
    </>
  );
}
