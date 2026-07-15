import linkedInImg from "/src/assets/linkedIn.svg?url";
import gitHubImg from "/src/assets/github.svg?url";
import mailImg from "/src/assets/mail.svg?url";

export function FooterJr() {
  return (
    <footer className="flex flex-col gap-8 bg-jr-negro-a-700 p-8 lg:flex-row-reverse lg:justify-evenly">
      <div className="flex items-center justify-evenly lg:my-0 lg:w-1/3">
        <a href="https://www.linkedin.com/in/jricardo-navarros">
          <img className="w-9 lg:w-11" src={linkedInImg} alt="LinkedIn" />
        </a>
        <a href="https://github.com/ReshiHG">
          <img className="w-9 lg:w-11" src={gitHubImg} alt="GitHub" />
        </a>
        <a href="mailto:qk67nm2u2@mozmail.com?subject=Contacto%20por%20p%C3%A1gina%20web&body=%C2%A1Hola%20J.%20Ricardo!%0D%0A%0D%0AAcabo%20de%20visitar%20tu%20p%C3%A1gina%20web%20y%20me%20interesa%20saber%20m%C3%A1s.%0D%0A%0D%0A ">
          <img className="w-9 lg:w-11" src={mailImg} alt="" />
        </a>
      </div>
      <p className="mx-10 text-center text-sm font-light text-white lg:my-0 lg:text-base">
        Hecho con 🧡 desde México <br /> <br />© {new Date().getFullYear()} J.
        Ricardo. Todos los derechos reservados.
      </p>
    </footer>
  );
}
