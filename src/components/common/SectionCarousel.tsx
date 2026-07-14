import { CarouselSwiper } from "./CarouselSwiper";
import imgPersonalWeb from "/src/assets/Proyecto-personal-web.png";
import imgJS from "/src/assets/Proyecto-JS.png";
import imgBH from "/src/assets/Proyecto-Bussines-House.png";
import imgMyM from "/src/assets/Proyecto-Mascotas-y-Mascotitas.png";

interface Props {
  sectionId: string;
}

export function SectionCarousel({ sectionId }: Props) {
  return (
    <>
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-arriba.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-arriba-desk.png)]"></div>

      <section id={sectionId} className="-mt-16 pt-16">
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
    </>
  );
}
