import { CarouselSwiper } from "./components/common/CarouselSwiper";
import { Hero } from "./components/common/Hero";
import { Menu } from "./components/common/Menu";
import { SectionCards } from "./components/common/SectionCards";
import logoSVG from "/src/assets/Logo-jr-fc.svg?url";
import imgPersonalWeb from "/src/assets/Proyecto-personal-web.png";
import imgJS from "/src/assets/Proyecto-JS.png";
import imgBH from "/src/assets/Proyecto-Bussines-House.png";
import imgMyM from "/src/assets/Proyecto-Mascotas-y-Mascotitas.png";

export function App() {
  return (
    <>
      <Menu
        marcaText={"J. Ricardo"}
        logoSVG={logoSVG}
        sections={[
          "Sobre mi",
          "Tecnologías",
          "Proyectos",
          "¿Qué hago?",
          "Contacto",
        ]}
      />
      <Hero sectionId="Sobre mi" />
      <SectionCards sectionId={"Tecnologías"} />
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-arriba.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-arriba-desk.png)]"></div>

      <section id="Proyectos">
        <h2 className="bg-jr-negro-a-700 p-4 text-center font-Noto text-3xl text-white">
          Proyectos
        </h2>
        <CarouselSwiper
          projects={[
            {
              imgSlide: imgPersonalWeb,
              title: "Web Personal",
              content:
                "Mi página personal, diseñada para dar a conocer mis habilidades y trabajos como desarrollador web. Construida con React, Tailwind y Vite",
              URL: "#",
            },
            {
              imgSlide: imgJS,
              title: "Ejercicios JS",
              content:
                "Página que desarrollé para prácticar los conocimientos que iba adquiriendo de forma autodidacta sobre JavaScript. Construida con HTML, CSS y JavaScript",
              URL: "#",
            },
            {
              imgSlide: imgBH,
              title: "Bussines House",
              content:
                "Página desarrollada a medida en mi primer trabajo, con el fin de dar a conocer la empresa y los diferentes desarrollos inmobiliarios. Desarrollada con HTML, CSS, JS, PHP, NodeJS y Netlify",
              URL: "#",
            },
            {
              imgSlide: imgMyM,
              title: "Mascotas y Mascotitas",
              content:
                "Aplicación web desarrollada para la clínica veterinaria homónima, que permite gestionar el inventario de medicamentos y stock de tienda. Desarrollada con HTML, CSS, PHP, MYSQL y XAMPP",
              URL: "#",
            },
          ]}
        />
      </section>
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-abajo-sombra.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-abajo-sombra-desk.png)]"></div>

      <p className="h-dvh">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
        maiores molestiae minima eos rerum debitis, corrupti, quo ducimus at
        unde eius nobis adipisci atque eaque ad ab dicta necessitatibus soluta.
      </p>
    </>
  );
}
