import { HabilityCard } from "../common/HabilityCard";
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
        <div className="container flex max-w-7xl flex-wrap items-center justify-center gap-8 p-8">
          <HabilityCard
            img={dataBaseImg}
            title="Bases de datos"
            content="Poseo una amplia experiencia trabajando con consultas, procedimientos almacenados y Jobs, ya sea para darles soporte, mantenimiento u optimización."
          />
          <HabilityCard
            img={supportImg}
            title="Soporte N2"
            content="He dado soporte a aplicaciones webs y de escritorio.  Puedo atender usuarios, diagnosticar errores e implementar soluciones, evitando que los procesos críticos se detengan."
          />

          <HabilityCard
            img={frontendImg}
            title="Front-End"
            content="Mi especialidad es convertir cualquier diseño en una interfaz web funcional, responsiva y con disponibilidad online."
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
            content="La mayor parte de mi carrera he trabajado con metodologías ágiles, especialmente SCRUM"
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
