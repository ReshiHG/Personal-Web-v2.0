import hamburgerSVG from "/src/assets/hamburguer.svg?url";
import xButtonSVG from "/src/assets/x-button.svg?url";

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
      <button className="fixed right-5 bottom-5" onClick={handleMenuButton}>
        {isOpen ? (
          <img className="h-16 w-16" src={xButtonSVG} alt="close button" />
        ) : (
          <img
            className="h-16 w-16"
            src={hamburgerSVG}
            alt="hamburger button"
          />
        )}
      </button>
    </>
  );
}
