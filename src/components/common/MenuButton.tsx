import { Spin as Hamburger } from "hamburger-react";

interface MenuButtonProps {
  isOpen: boolean;
  handleMenuButton: () => void;
}

export function MenuButton({
  isOpen = false,
  handleMenuButton = () => {},
}: MenuButtonProps) {
  const color = isOpen ? "#fdfdfe" : "#ff7800";
  const buttonClassName = isOpen
    ? "bg-jr-logo-naranja-500"
    : "bg-jr-logo-blanco-500";
  return (
    <>
      <button
        className={`fixed right-5 bottom-5 rounded-full border-2 border-jr-logo-naranja-500 p-2 md:hidden ${buttonClassName}`}
        onClick={handleMenuButton}
      >
        <Hamburger
          toggled={isOpen}
          // toggle={handleMenuButton}
          size={40}
          direction="right"
          color={color}
          rounded
          distance="sm"
          duration={0.5}
        />
      </button>
    </>
  );
}
