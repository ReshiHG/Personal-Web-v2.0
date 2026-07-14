import { useState } from "react";
import { MenuButton } from "./MenuButton";
import { MenuItem } from "./MenuItem";

interface MenuProps {
  marcaText: string;
  logoSVG: string;
  sections: Sections[];
}

interface Sections {
  title: string;
  hideDesk?: boolean;
}

export function Menu({
  marcaText = "J. Ricardo",
  logoSVG,
  sections = [
    { title: "Sección móvil", hideDesk: true },
    { title: "Sección Desk", hideDesk: false },
  ],
}: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].title);

  const handleMenuButton = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="sticky top-0 z-40 -mt-16 h-16 w-full bg-jr-negro-a-900 text-white lg:h-auto">
        <div className="container mx-auto gap-8 lg:flex lg:justify-around">
          <div className="relative z-50 flex items-center bg-jr-negro-a-900 p-3 lg:flex lg:gap-8">
            <img src={logoSVG} alt={`Logo ${marcaText}`} className="h-10" />
            <h1 className="mx-auto font-Noto text-3xl font-extralight">
              {marcaText}
            </h1>
          </div>
          <div
            className={`absolute top-0 right-0 left-0 flex h-[calc(100vh-64px)] origin-top flex-col justify-center bg-jr-negro-a-900 p-3 transition-all duration-500 ease-in-out lg:static lg:h-auto lg:flex-row lg:items-center lg:gap-3 ${
              isOpen
                ? "pointer-events-auto translate-y-16 opacity-100 lg:translate-y-0"
                : "pointer-events-none -translate-y-full opacity-0 lg:pointer-events-auto lg:translate-y-0 lg:opacity-100"
            }`}
          >
            {sections.map(({ title, hideDesk }) => (
              <MenuItem
                key={title}
                text={title}
                active={title === activeSection ? true : false}
                hide={hideDesk}
                handleMenuButton={handleMenuButton}
                handleMenuItem={() => setActiveSection(title)}
              />
            ))}
          </div>
        </div>
      </nav>
      <MenuButton isOpen={isOpen} handleMenuButton={handleMenuButton} />
    </>
  );
}
