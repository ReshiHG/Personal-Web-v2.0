import { motion } from "framer-motion";

export function Hero() {
  return (
    <>
      <section className="flex h-[calc(100vh-64px)] flex-col justify-center gap-6 bg-[url(/src/assets/escritorio-taza-1920.jpg)] bg-cover bg-center p-7 text-white md:justify-start md:gap-8 md:bg-[url(/src/assets/escritorio-taza-2984.jpg)] md:p-12">
        <motion.h1
          className="font-Noto text-5xl md:text-7xl"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Hola, <br />
          soy Ricardo
        </motion.h1>

        <motion.h3
          className="font-Noto text-4xl font-extralight md:text-6xl"
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
        className="bg-jr-naranja-200 text-white md:absolute md:bottom-0 md:left-0 md:w-2/3 md:rounded md:rounded-tr-4xl md:opacity-95 md:shadow-[10px_-5px_25px_rgba(14,11,22,0.5)]"

        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
      >
        <h2 className="bg-jr-negro-a-700 p-5 text-center font-Noto text-2xl font-semibold md:bg-transparent md:pb-0 md:pl-8 md:text-start md:text-4xl">
          Sobre mi
        </h2>

        <p className="flex flex-col gap-3 p-8 text-justify md:text-xl md:font-light">
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
    </>
  );
}
