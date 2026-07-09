import { motion } from "framer-motion";

interface HeroProps {
  sectionId: string;
}

export function Hero({ sectionId = "" }: HeroProps) {
  return (
    <>
      <section
        id={sectionId}
        className="flex h-[calc(100vh)] flex-col justify-center gap-6 bg-[url(/src/assets/escritorio-taza-1920.jpg)] bg-cover bg-center p-7 text-white lg:justify-start lg:gap-8 lg:bg-[url(/src/assets/escritorio-taza-2984.jpg)] lg:p-12 lg:pt-28"
      >
        <motion.h1
          className="font-Noto text-5xl lg:text-7xl"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Hola, <br />
          soy Ricardo
        </motion.h1>

        <motion.h3
          className="font-Noto text-4xl font-extralight lg:text-6xl"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <i>
            Desarrollador <br /> web
          </i>
        </motion.h3>
      </section>

      <motion.section
        className="bg-jr-naranja-200 text-white lg:absolute lg:bottom-0 lg:left-0 lg:w-2/3 lg:rounded lg:rounded-tr-4xl lg:opacity-95 lg:shadow-[12px_-13px_20px_rgba(14,11,22,0.3)]"

        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        <h2 className="bg-jr-negro-a-700 p-5 text-center font-Noto text-2xl font-semibold lg:bg-transparent lg:pb-0 lg:pl-8 lg:text-start lg:text-4xl">
          Sobre mi
        </h2>

        <p className="flex flex-col gap-3 p-8 text-justify lg:text-xl lg:font-light">
          <span>
            <b>Desarrollador Web con 3 años de experiencia.</b>
          </span>
          <span>
            He diseñado e implementado landing pages usando JavaScript, Node.js,
            Illustrator y Figma.
          </span>
          <span>
            También he trabajado como soporte back-end, documentando procesos y
            resolviendo incidencias en ERP mediante procedimientos almacenados
            en SQL Server y código .NET / Visual Basic, siguiendo metodologías
            ágiles.
          </span>
          <span>
            Busco un entorno estable para crear y mantener aplicaciones web, con
            oportunidades de crecimiento profesional a largo plazo, además estoy
            en la mejor disposición de aprender rápido nuevas tecnologías ya que
            creo firmemente que{" "}
            <b>el trabajo de tus sueños es aquel que dominas.</b>
          </span>
        </p>
      </motion.section>
      <div className="h-22.5 bg-[url(/src/assets/divisor-naranja-abajo-sombra.png)] lg:h-33.75 lg:bg-[url(/src/assets/divisor-naranja-abajo-sombra-desk.png)]"></div>
    </>
  );
}
