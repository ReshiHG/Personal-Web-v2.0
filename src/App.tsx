import { Menu } from "./components/common/Menu";
import logoSVG from "/src/assets/Logo-jr-fc.svg?url";

export function App() {
  return (
    <>
      <Menu
        marcaText={"J. Ricardo"}
        logoSVG={logoSVG}
        sections={[
          { sectionName: "Inicio", active: true },
          { sectionName: "Tecnologías", active: false },
          { sectionName: "Proyectos", active: false },
          { sectionName: "¿Qué hago?", active: false },
          { sectionName: "Contacto", active: false },
        ]}
      />
    </>
  );
}
