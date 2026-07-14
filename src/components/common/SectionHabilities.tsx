import { HabilityCard } from "./HabilityCard";
import dataBaseImg from "/src/assets/data-base.svg";
import supportImg from "/src/assets/soporte-n2.svg";
import frontendImg from "/src/assets/frontend.svg";
import backendImg from "/src/assets/backend.svg";
import englishImg from "/src/assets/english.svg";
import engineeringImg from "/src/assets/ingenieria-software.svg";
import metodologiesImg from "/src/assets/metodologias.svg";
import metodicoImg from "/src/assets/metodico.svg";

interface Props {
  sectionId: string;
}

export function SectionHabilities({ sectionId = "" }: Props) {
  return (
    <section
      id={sectionId}
      className="bg-[url(/src/assets/motivo-mobile.png)] bg-size-[100%] bg-fixed lg:bg-[url(/src/assets/motivo-desktop.png)]"
    >
      <div className="container mx-auto -mt-16 max-w-7xl p-8 pt-16">
        <h2 className="border-b-3 p-4 text-center font-Noto text-3xl">
          Habilidades
        </h2>
        <div className="container flex max-w-7xl flex-wrap items-center gap-8 p-8">
          <HabilityCard
            img={dataBaseImg}
            title="Bases de datos"
            content="Me siento cómodo trabajando con consultas a bases de datos, procedimientos almacenados y Jobs, tanto para dar soporte, crear y optimizar las mismas."
          />
          <HabilityCard
            img={supportImg}
            title="Soporte N2"
            content="Tengo experiencia amplia dando soporte a aplicaciones tanto webs como de escritorio. Puedo diagnosticar el problema, atender a usuarios y desarrollar soluciones para las incidencias."
          />

          <HabilityCard
            img={frontendImg}
            title="Front-End"
            content="Me especializo en transformar el diseño del software en interfaces de páginas, sitios o aplicaciones web funcionales, y desplegarlas en internet."
          />

          <HabilityCard
            img={backendImg}
            title="Back-End"
            content="Tengo la versatilidad suficiente para realizar tareas generales de back-end como el desarrollo de end-points sencillos, instalación de servidores y bases de datos."
          />

          <HabilityCard
            img={englishImg}
            title="Inglés técnico"
            content="Puedo leer documentación oficial en inglés y mantener conversaciones sencillas de forma hablada o escrita."
          />

          <HabilityCard
            img={engineeringImg}
            title="Ingeniería de software"
            content="Poseo conocimientos sobre todo el proceso de desarrollo de software, como lo son: la planificación, análisis, diseño, desarrollo, pruebas, implementación y el mantenimiento."
          />

          <HabilityCard
            img={metodologiesImg}
            title="Metodologías ágiles"
            content="Habituado a trabajar con metodologías ágiles, especialmente con SCRUM con la cual trabajé durante la mayor parte de mi carrera profesional."
          />

          <HabilityCard
            img={metodicoImg}
            title="Metódico"
            content="Me destaco por mi forma metodológica y ordenada de trabajar. Me encanta documentar procesos y mantener el orden, tanto el los procesos como en el código."
          />
        </div>
      </div>
    </section>
  );
}
