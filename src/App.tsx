import { Menu } from "./components/common/Menu";
import { Hero } from "./components/layout/Hero";
import { SectionCards } from "./components/layout/SectionCards";
import { SectionCarousel } from "./components/layout/SectionCarousel";
import { SectionHabilities } from "./components/layout/SectionHabilities";

import logoSVG from "/src/assets/Logo-jr-fc.svg?url";

import { Footer } from "./components/layout/Footer";
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
            title: "Experiencia",
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
      <SectionCarousel sectionId={"Experiencia"} />
      <SectionHabilities sectionId={"Habilidades"} />
      <SectionContact sectionId={"Contacto"} />
      <Footer />
    </>
  );
}
