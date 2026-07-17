import { CarouselSwiper } from "../common/CarouselSwiper";
import imgPersonalWeb from "/src/assets/Proyecto-personal-web.png";
import imgJS from "/src/assets/Proyecto-JS.png";
import imgBH from "/src/assets/Proyecto-Bussines-House.png";
import imgDGO from "/src/assets/dalton-go.png";
import imgMyM from "/src/assets/Proyecto-Mascotas-y-Mascotitas.png";
import htmlImg from "/src/assets/html1.png?url";
import cssImg from "/src/assets/CSS.png?url";
import jsImg from "/src/assets/Javascript.png?url";
import tsImg from "/src/assets/TypeScript.png?url";
import BootstrapImg from "/src/assets/Bootstrap.png?url";
import tailwindImg from "/src/assets/Tailwind.png?url";
import figmaImg from "/src/assets/Figma.png?url";
import reactImg from "/src/assets/React.png?url";
import gitImg from "/src/assets/Git.png?url";
import githubImg from "/src/assets/GitHub.png?url";
import illustratorImg from "/src/assets/Illustrator.png?url";
import netlifyImg from "/src/assets/Netlify.png?url";
import nodejsImg from "/src/assets/Nodejs.png?url";
import phpImg from "/src/assets/PHP.png?url";
import viteImg from "/src/assets/Vite.png?url";
import mysqlImg from "/src/assets/MYSQL.png?url";
import sqlServerImg from "/src/assets/SQLServer.png?url";
import visualStudioImg from "/src/assets/visual-studio.png?url";
import visualBasicImg from "/src/assets/visual-basic.png?url";
import cSharpImg from "/src/assets/c-sharp.png?url";
import sqlSearchImg from "/src/assets/sql-search.png?url";

interface Props {
  sectionId: string;
}

export function SectionCarousel({ sectionId }: Props) {
  return (
    <>
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-arriba.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-arriba-desk.png)]"></div>

      <section id={sectionId} className="-mt-16 pt-16">
        <h2 className="bg-jr-negro-a-700 p-10 text-center font-Noto text-3xl text-white">
          Experiencia
        </h2>
        <CarouselSwiper
          projects={[
            {
              imgSlide: imgPersonalWeb,
              title: "Web Personal",
              content: (
                <>
                  <b>Portafolio profesional</b> con diseño responsive. Contiene
                  animaciones fluidas usando Framer Motion (librería de React),
                  tarjetas resposive usando Flexbox, un carrusel de proyectos
                  dinámico, además de implementar un menú con navegación suave.{" "}
                  <br /> <br /> <b>Resultado:</b> Sitio accesible, adaptable a
                  diversos dispositivos, optimizado para SEO y con un
                  rendimiento excelente. Refleja mi capacidad para desarrollar
                  interfaces modernas y centradas en el usuario.
                </>
              ),
              URL: "#",
              tecnologies: [
                { tecImg: htmlImg, altImg: "HTML" },
                { tecImg: cssImg, altImg: "CSS" },
                { tecImg: tailwindImg, altImg: "Tailwind" },
                { tecImg: tsImg, altImg: "TypeScript" },
                { tecImg: reactImg, altImg: "React" },
                { tecImg: viteImg, altImg: "Vite" },
                { tecImg: figmaImg, altImg: "Figma" },
                { tecImg: illustratorImg, altImg: "Illustrator" },
                { tecImg: gitImg, altImg: "Git" },
                { tecImg: githubImg, altImg: "GitHub" },
              ],
            },
            {
              imgSlide: imgMyM,
              title: "Mascotas y Mascotitas",
              content: (
                <>
                  <b>Aplicación web para gestión de inventario</b> en una
                  clínica veterinaria. Implementada con sistema de{" "}
                  <b>autenticación de usuarios</b> (roles: jefe de clínica,
                  veterinario, gerente, proveedor, desarrollador), gestión de
                  medicamentos (cantidad restante total, apartados y
                  disponibles), proveedores,{" "}
                  <b>solicitudes de reabastecimiento y alertas</b> de stock
                  bajo.
                  <br />
                  <br />
                  <b>Resultado:</b> Optimizó la gestión de medicamentos,{" "}
                  <b>reduciendo el 73.8% de falta de medicamentos </b> por
                  desconocimiento del stock actual. Además unifico la
                  información de los proveedores, y las solicitudes de
                  reabastecimiento de medicamento. Este proyecto demuestra mi{" "}
                  <b>
                    capacidad para llevar a cabo todo el ciclo de vida del
                    software
                  </b>
                  , pasando por la identificación de requisitos, cotización,
                  diseño, codificación, documentación e implementación de la
                  aplicación, mostrando mi{" "}
                  <b>competencia como desarrollador fullstack.</b>
                </>
              ),
              URL: "#",
              tecnologies: [
                { tecImg: htmlImg, altImg: "HTML" },
                { tecImg: cssImg, altImg: "CSS" },
                { tecImg: BootstrapImg, altImg: "Bootstrap" },
                { tecImg: phpImg, altImg: "PHP" },
                { tecImg: mysqlImg, altImg: "MySQL" },
                { tecImg: illustratorImg, altImg: "Illustrator" },
              ],
            },
            {
              imgSlide: imgDGO,
              title: "Dalton Go",
              content: (
                <>
                  <b>Sistema web ERP</b> al que di mantenimiento y soporte
                  durante casi 3 años. Atendí las incidencias de órdenes de
                  compra y reportes mediante <b>tickets</b>, a la par que
                  participaba en <b>decisiones técnicas</b> usando metodologías
                  ágiles como SCRUM con el fin de corregir de raíz las consultas
                  y procedimientos almacenados con fallas. Además{" "}
                  <b>documenté procesos</b> perdidos de la memoria
                  organizacional.
                  <br />
                  <br />
                  <b>Resultado:</b> Corrección y refactorización de las
                  consultas y procedimientos almacenados más usados,{" "}
                  <b>
                    mejorando el rendimiento, reduciendo el número de
                    incidencias
                  </b>{" "}
                  y sobre todo la mejora en los tiempos de trabajo del equipo
                  administrativo y de contaduría. Además de{" "}
                  <b>facilitar el onboarding</b> de nuevos empleados y las
                  pruebas de calidad mediante la documentación de procesos.
                </>
              ),
              URL: "#",
              tecnologies: [
                { tecImg: htmlImg, altImg: "HTML" },
                { tecImg: visualStudioImg, altImg: "Visual Studio" },
                { tecImg: visualBasicImg, altImg: "Visual Basic" },
                { tecImg: cSharpImg, altImg: "C#" },
                { tecImg: sqlServerImg, altImg: "SQL Server" },
                { tecImg: sqlSearchImg, altImg: "SQL Search" },
              ],
            },
            {
              imgSlide: imgBH,
              title: "Bussines House",
              content: (
                <>
                  <b>Sitio web corporativo</b> desarrollado para una
                  inmobiliaria en mi primer trabajo profesional. Construido con
                  énfasis en <b>rendimiento, SEO y experiencia de usuario.</b>{" "}
                  Incluye un sistema de gestión de propiedades (filtros y
                  búsqueda) y además de formularios de contacto dirigidos a la{" "}
                  <b>prospección</b> de clientes y generación de <b>leads</b>{" "}
                  para el equipo de ventas.
                  <br />
                  <br />
                  <b>Resultado:</b> El sitio ayudó a consolidar la presencia
                  digital de la empresa, aumentando la generación de leads.
                  <b>
                    {" "}
                    Aprendí a trabajar con recursos limitados, requisitos
                    cambiantes y a coordinarme con diseñadores, equipos de
                    marketing, y a conocer el sector inmobiliario.
                  </b>
                </>
              ),
              URL: "#",
              tecnologies: [
                { tecImg: htmlImg, altImg: "HTML" },
                { tecImg: cssImg, altImg: "CSS" },
                { tecImg: BootstrapImg, altImg: "Bootstrap" },
                { tecImg: jsImg, altImg: "JavaScript" },
                { tecImg: nodejsImg, altImg: "Node.js" },
                { tecImg: netlifyImg, altImg: "Netlify" },
                { tecImg: gitImg, altImg: "Git" },
                { tecImg: githubImg, altImg: "GitHub" },
              ],
            },
            {
              imgSlide: imgJS,
              title: "Ejercicios JS",
              content: (
                <>
                  <b>Diversidad de ejercicios prácticos</b> escritos en
                  JavaScript, que abarcan desde los fundamentos (variables,
                  funciones, objetos) hasta conceptos avanzados como{" "}
                  <b>
                    promesas, async/await, manipulación del DOM, eventos y CRUDs
                    con Ajax, Axios y Fetch.
                  </b>
                  <br />
                  <br />
                  <b>Resultado:</b> Este repositorio ma ayudo a practicar y
                  demuestrar mi capacidad para escribir código limpio, modular y
                  eficiente, además de mi compromiso con el aprendizaje continuo
                  y la práctica deliberada.
                </>
              ),
              URL: "#",
              tecnologies: [
                { tecImg: htmlImg, altImg: "HTML" },
                { tecImg: cssImg, altImg: "CSS" },
                { tecImg: jsImg, altImg: "JavaScript" },
                { tecImg: gitImg, altImg: "Git" },
                { tecImg: githubImg, altImg: "GitHub" },
              ],
            },
          ]}
        />
      </section>
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-abajo-sombra.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-abajo-sombra-desk.png)]"></div>
    </>
  );
}
