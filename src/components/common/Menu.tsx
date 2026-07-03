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
  return (
    <>
      <nav className="h-16 w-full bg-jr-negro-a-900 text-white">
        <div className="flex items-center p-3">
          <img src={logoSVG} alt={`Logo ${marcaText}`} className="h-10" />
          <h1 className="mx-auto font-Noto text-3xl font-extralight">
            {marcaText}
          </h1>
        </div>
        <div className="flex flex-col justify-center bg-jr-negro-a-900 p-4">
          {sections.map(({ sectionName, active }) => (
            <MenuItem key={sectionName} text={sectionName} active={active} />
          ))}
        </div>
      </nav>
    </>
  );
}
