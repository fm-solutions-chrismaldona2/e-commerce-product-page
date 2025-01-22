import { useMemo } from "react";
import styles from "./PreviewControlButton.module.css";
import { PreviousIcon, NextIcon } from "@shared/components/SvgIcons/SvgIcons";
import { capitalizeWord } from "@shared/utils/capitalizeWord";

interface PreviewControlButtonProps {
  type: "previous" | "next";
  size: "normal" | "small";
  onClick: () => void;
}

const getButtonIcon = (type: PreviewControlButtonProps["type"]) => {
  if (type === "previous") return <PreviousIcon />;
  if (type === "next") return <NextIcon />;
};

const PreviewControlButton = ({
  type,
  size,
  onClick,
}: PreviewControlButtonProps) => {
  const icon = useMemo(() => getButtonIcon(type), [type]);
  return (
    <button
      className={`${styles.button} ${styles[`button--${size}`]}`}
      onClick={onClick}
      aria-label={`${capitalizeWord(type)} image`}
    >
      <div className={styles.button__icon}>{icon}</div>
    </button>
  );
};

export default PreviewControlButton;
