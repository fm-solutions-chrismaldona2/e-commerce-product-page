import styles from "./CartButton.module.css";
import { CartIcon } from "@shared/components/SvgIcons/SvgIcons";

export const CartButton = () => {
  return (
    <button className={styles.cartButton} aria-label="View Cart">
      <CartIcon className={styles.cartButton__icon} />
      <span className={styles.cartButton__count}>3</span>
    </button>
  );
};
