import { motion } from "framer-motion";

interface HeroProps {
  sectionIdMobile: string;
  sectionIdDesktop: string;
}

export function Hero({
  sectionIdMobile = "",
  sectionIdDesktop = "",
}: HeroProps) {
  return (
    <>
      <section
        id={sectionIdDesktop}
        className="flex h-[calc(100vh)] flex-col justify-center gap-6 bg-[url(/src/assets/escritorio-taza-1920.jpg)] bg-cover bg-center p-7 text-white lg:h-[calc(100vh)] lg:justify-start lg:gap-8 lg:bg-[url(/src/assets/escritorio-taza-2984.jpg)] lg:p-12 lg:pt-28"
      >
        <div className="container mx-auto max-w-7xl">
          <motion.h1
            className="font-Noto text-5xl lg:mb-4 lg:text-6xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            Hola, <br />
            soy Ricardo
          </motion.h1>

          <motion.h3
            className="font-Noto text-4xl font-extralight lg:text-5xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <i>
              Desarrollador <br /> web
            </i>
          </motion.h3>
        </div>
      </section>

      <div
        id={sectionIdMobile}
        className="relative container mx-auto -mt-16 max-w-7xl pt-16"
      >
        <motion.section
          className="bg-jr-naranja-200 text-white lg:absolute lg:bottom-12 lg:left-0 lg:w-3/4 lg:rounded-4xl lg:bg-jr-naranja-200/90 lg:shadow-[12px_-13px_20px_rgba(14,11,22,0.3)]"

          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <h2 className="bg-jr-negro-a-700 p-5 text-center font-Noto text-2xl font-semibold lg:hidden lg:bg-transparent lg:px-12 lg:pt-8 lg:pb-0 lg:text-start lg:text-3xl">
            Sobre mi
          </h2>

          <p className="flex flex-col gap-3 p-8 text-justify lg:px-10 lg:py-8 lg:text-lg lg:font-light">
            <span>
              <b>Tengo 3 años de experiencia como desarrollador web. </b>
            </span>
            <span>
              He diseñado e implementado landing pages usando JavaScript,
              Node.js, Illustrator y Figma.
            </span>
            <span>
              También he trabajado como soporte back-end, documentando procesos
              y resolviendo incidencias en ERP mediante procedimientos
              almacenados en SQL Server y código .NET / Visual Basic, siguiendo
              metodologías ágiles.
            </span>
            <span>
              Mi nivel de inglés es pre-intermedio, así que puedo leer
              documentación oficial y comunicarme de forma sencilla.
            </span>
            <span>
              Busco un entorno estable para crear y mantener aplicaciones web,
              con oportunidades de crecimiento profesional a largo plazo, además
              estoy en la mejor disposición de aprender rápido nuevas
              tecnologías ya que creo firmemente que
              <b> el trabajo de tus sueños es aquel que dominas.</b>
            </span>
          </p>
        </motion.section>
      </div>
      <div className="h-22.5 bg-[url(/src/assets/divisor-naranja-abajo-sombra.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-naranja-abajo-sombra-desk.png)]"></div>
    </>
  );
}
