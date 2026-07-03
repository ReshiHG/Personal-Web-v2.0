// MenuItem.tsx
interface MenuItemProps {
  text: string;
  active?: boolean;
}

export function MenuItem({
  text = "Elemento de menú",
  active = false,
}: MenuItemProps) {
  const activeClass: string = active ? "font-bold" : " ";

  return (
    <a className={`py-4 text-center text-xl ${activeClass}`} href="">
      {text}
    </a>
  );
}
