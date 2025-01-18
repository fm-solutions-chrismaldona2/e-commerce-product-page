import clsx from "clsx";
import styles from "./AddToCartButton.module.css";
import { ButtonProps } from "@shared/types";
import { CartIcon } from "@shared/components/SvgIcons/SvgIcons";

const AddToCartButton = ({
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsx(styles.button, className)}
      onClick={onClick}
      {...props}
    >
      <CartIcon className={styles.button__icon} />
      <span className={styles.button__text}>Add to cart</span>
    </button>
  );
};

export default AddToCartButton;
