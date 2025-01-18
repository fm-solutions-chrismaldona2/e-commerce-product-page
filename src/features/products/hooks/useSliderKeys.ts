import { useEffect } from "react";

type UseSliderKeysProps = {
  onLeft: () => void;
  onRight: () => void;
  onEnter?: () => void;
  isActive: boolean;
};

export const useSliderKeys = ({
  onLeft,
  onRight,

  onEnter,
  isActive,
}: UseSliderKeysProps) => {
  useEffect(() => {
    if (!isActive) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onLeft();
      } else if (event.key === "ArrowRight") {
        onRight();
      } else if (onEnter && event.key === "Enter") {
        onEnter();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onLeft, onRight, isActive]);
};
