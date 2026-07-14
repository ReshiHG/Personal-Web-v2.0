import linkedInImg from "/src/assets/linkedIn.svg?url";
import gitHubImg from "/src/assets/github.svg?url";
import mailImg from "/src/assets/mail.svg?url";

export function FooterJr() {
  return (
    <footer className="flex flex-col gap-8 bg-jr-negro-a-700 p-8 lg:flex-row-reverse lg:justify-evenly">
      <div className="flex items-center justify-evenly lg:my-0 lg:w-1/3">
        <a href="">
          <img className="w-9 lg:w-11" src={linkedInImg} alt="" />
        </a>
        <a href="">
          <img className="w-9 lg:w-11" src={gitHubImg} alt="" />
        </a>
        <a href="">
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
