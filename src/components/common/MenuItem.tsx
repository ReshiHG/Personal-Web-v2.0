// MenuItem.tsx
interface MenuItemProps {
  text: string;
  active?: boolean;
}

export function MenuItem({
  text = "Elemento de menú",
  active = false,
}: MenuItemProps) {
  const activeClass: string = active ? "font-semibold" : " ";

  return (
    <a
      className={`py-4 text-center text-xl font-light lg:py-0 ${activeClass}`}
      href={`#${text}`}
    >
      {text}
    </a>
  );
}
