import styles from "./CartButton.module.css";
import { CartIcon } from "@shared/components/SvgIcons/SvgIcons";
import Cart from "@features/cart/components/Cart/Cart";
import { useCart } from "@features/cart/hooks/useCart";
import { motion } from "motion/react";

export const CartButton = () => {
  const { getCartLength } = useCart();
  const cartLength = getCartLength();

  return (
    <>
      <button className={styles.cartButton} aria-label="View cart">
        <CartIcon className={styles.cartButton__icon} />

        {cartLength > 0 && (
          <motion.span
            className={styles.cartButton__count}
            key={cartLength}
            initial={{ scale: 1 }}
            animate={{ scale: [1.3, 1] }}
            transition={{
              duration: 100,
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            {cartLength}
          </motion.span>
        )}
      </button>
      <div className={styles.cart}>
        <Cart />
      </div>
    </>
  );
};
