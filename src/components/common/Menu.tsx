import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { MenuItem } from "./MenuItem";

interface MenuProps {
  marcaText: string;
  logoSVG: string;
  sections: Sections[];
}
interface Sections {
  sectionName: string;
  active: boolean;
}

export function Menu({
  marcaText = "J. Ricardo",
  logoSVG,
  sections = [
    { sectionName: "Sección 1", active: true },
    { sectionName: "Sección 2", active: false },
  ],
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuButton = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="sticky top-0 h-16 w-full bg-jr-negro-a-900 text-white">
        <div className="relative z-10 flex items-center bg-jr-negro-a-900 p-3">
          <img src={logoSVG} alt={`Logo ${marcaText}`} className="h-10" />
          <h1 className="mx-auto font-Noto text-3xl font-extralight">
            {marcaText}
          </h1>
        </div>
        <div
          className={`absolute top-0 right-0 left-0 flex h-[calc(100vh-64px)] origin-top flex-col justify-center bg-jr-negro-a-900 p-4 transition-all duration-500 ease-in-out ${
            isOpen
              ? "pointer-events-auto translate-y-16 opacity-100"
              : "pointer-events-none -translate-y-full opacity-100"
          }`}
        >
          {sections.map(({ sectionName, active }) => (
            <MenuItem key={sectionName} text={sectionName} active={active} />
          ))}
        </div>
      </nav>
      <MenuButton isOpen={isOpen} handleMenuButton={handleMenuButton} />
      <section className="h-250">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          fuga nemo numquam voluptatibus iure modi magni amet debitis deleniti
          quaerat ullam tempore sequi vero eligendi sunt laboriosam earum,
          quidem dignissimos!
        </p>
      </section>
    </>
  );
}
