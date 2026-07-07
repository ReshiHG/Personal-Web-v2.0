// MenuItem.tsx
interface MenuItemProps {
  key: string;
  text: string;
  active?: boolean;
  handleMenuButton: () => void;
  handleMenuItem: () => void;
}

export function MenuItem({
  text = "Elemento de menú",
  active = false,
  handleMenuButton = () => {},
  handleMenuItem = () => {},
}: MenuItemProps) {
  const activeClass: string = active ? "font-semibold" : " ";
  return (
    <a
      className={`py-4 text-center text-xl font-light lg:py-0 ${activeClass}`}
      href={`#${text}`}
      onClick={() => {
        handleMenuButton();
        handleMenuItem();
      }}
    >
      {text}
    </a>
  );
}
