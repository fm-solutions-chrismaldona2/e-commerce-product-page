import clsx from "clsx";
import styles from "./Button.module.css";
import { ButtonProps } from "@/shared/types";
import { memo } from "react";

const Button = memo(
  ({ className, onClick, children, ...props }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={clsx(styles.button, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default Button;
