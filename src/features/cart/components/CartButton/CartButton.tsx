import styles from "./CartButton.module.css";
import { CartIcon } from "@shared/components/SvgIcons/SvgIcons";
import { useCart } from "@features/cart/hooks/useCart";
import { AnimatePresence, motion } from "motion/react";

interface CartButtonProps {
  onClick: () => void;
}

const CartButton = ({ onClick }: CartButtonProps) => {
  const { getCartLength } = useCart();
  const cartLength = getCartLength();

  return (
    <button
      className={styles.cartButton}
      aria-label="View cart"
      onClick={onClick}
    >
      <CartIcon className={styles.cartButton__icon} />

      <AnimatePresence>
        {cartLength > 0 && (
          <motion.span
            className={styles.cartButton__count}
            key={cartLength}
            initial={{ scale: 0 }}
            animate={{ scale: [1.3, 1] }}
            exit={{ scale: 0 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            {cartLength}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

export default CartButton;
