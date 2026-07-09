import { Spin as Hamburger } from "hamburger-react";

interface MenuButtonProps {
  isOpen: boolean;
  handleMenuButton: () => void;
}

export function MenuButton({
  isOpen = false,
  handleMenuButton = () => {},
}: MenuButtonProps) {
  return (
    <>
      <button
        className={`fixed right-5 bottom-5 z-50 rounded-full border-2 border-jr-logo-naranja-500 bg-jr-logo-naranja-500 p-2 shadow-2xl/50 lg:hidden`}
        onClick={handleMenuButton}
      >
        <Hamburger
          toggled={isOpen}
          // toggle={handleMenuButton}
          size={40}
          direction="right"
          color="#fdfdfe"
          rounded
          distance="sm"
          duration={0.5}
        />
      </button>
    </>
  );
}
