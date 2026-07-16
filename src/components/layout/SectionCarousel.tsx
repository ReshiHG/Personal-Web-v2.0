import { CarouselSwiper } from "../common/CarouselSwiper";
import imgPersonalWeb from "/src/assets/Proyecto-personal-web.png";
import imgJS from "/src/assets/Proyecto-JS.png";
import imgBH from "/src/assets/Proyecto-Bussines-House.png";
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

interface Props {
  sectionId: string;
}

export function SectionCarousel({ sectionId }: Props) {
  return (
    <>
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-arriba.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-arriba-desk.png)]"></div>

      <section id={sectionId} className="-mt-16 pt-16">
        <h2 className="bg-jr-negro-a-700 p-10 text-center font-Noto text-3xl text-white">
          Proyectos
        </h2>
        <CarouselSwiper
          projects={[
            {
              imgSlide: imgPersonalWeb,
              title: "Web Personal",
              content:
                "Mi página personal, diseñada para dar a conocer mis habilidades y trabajos como desarrollador web.",
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
              imgSlide: imgJS,
              title: "Ejercicios JS",
              content:
                "Página que desarrollé para prácticar los conocimientos que iba adquiriendo de forma autodidacta sobre JavaScript.",
              URL: "#",
              tecnologies: [
                { tecImg: htmlImg, altImg: "HTML" },
                { tecImg: cssImg, altImg: "CSS" },
                { tecImg: jsImg, altImg: "JavaScript" },
                { tecImg: gitImg, altImg: "Git" },
                { tecImg: githubImg, altImg: "GitHub" },
              ],
            },
            {
              imgSlide: imgBH,
              title: "Bussines House",
              content:
                "Página desarrollada a medida en mi primer trabajo, con el fin de dar a conocer la empresa y los diferentes desarrollos inmobiliarios.",
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
              imgSlide: imgMyM,
              title: "Mascotas y Mascotitas",
              content:
                "Aplicación web desarrollada para la clínica veterinaria homónima, que permite gestionar el inventario de medicamentos y stock de tienda.",
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
          ]}
        />
      </section>
      <div className="h-22.5 bg-[url(/src/assets/divisor-negro-abajo-sombra.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-negro-abajo-sombra-desk.png)]"></div>
    </>
  );
}
