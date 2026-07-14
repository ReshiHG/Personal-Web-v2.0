// MenuItem.tsx
interface MenuItemProps {
  key: string;
  text: string;
  active?: boolean;
  hide?: boolean;
  handleMenuButton: () => void;
  handleMenuItem: () => void;
}

export function MenuItem({
  text = "Elemento de menú",
  active = false,
  hide = false,
  handleMenuButton = () => {},
  handleMenuItem = () => {},
}: MenuItemProps) {
  const activeClass: string = active ? "font-semibold" : " ";
  const hideClass: string = hide ? "lg:hidden" : " ";
  return (
    <a
      className={`py-4 text-center text-xl font-light lg:py-0 ${activeClass} ${hideClass}`}
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
