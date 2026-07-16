import { Menu } from "./components/common/Menu";
import { Hero } from "./components/common/Hero";
import { SectionCards } from "./components/common/SectionCards";
import { SectionCarousel } from "./components/common/SectionCarousel";
import { SectionHabilities } from "./components/common/SectionHabilities";

import logoSVG from "/src/assets/Logo-jr-fc.svg?url";

import { FooterJr } from "./components/layout/footer";
import { SectionContact } from "./components/layout/SectionContact";

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
            title: "Habilidades",
          },
          {
            title: "Contacto",
          },
        ]}
      />
      <Hero sectionIdMobile="Sobre mi" sectionIdDesktop="Inicio" />
      <SectionCards sectionId={"Tecnologías"} />
      <SectionCarousel sectionId={"Proyectos"} />
      <SectionHabilities sectionId={"Habilidades"} />
      <SectionContact sectionId={"Contacto"} />
      <FooterJr />
    </>
  );
}
