import { useEffect } from "react";

interface UseModalkeysProps {
  onClose: () => void;
}

export const useModalkeys = ({ onClose }: UseModalkeysProps) => {
  useEffect(() => {
    const closeOnEscapePressed = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", closeOnEscapePressed);
    return () => window.removeEventListener("keydown", closeOnEscapePressed);
  }, [onClose]);
};
