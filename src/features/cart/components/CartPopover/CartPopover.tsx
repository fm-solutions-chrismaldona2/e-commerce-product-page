import CartButton from "@features/cart/components/CartButton/CartButton";
import Cart from "@features/cart/components/Cart/Cart";
import styles from "./CartPopover.module.css";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useRef, useState } from "react";

const CartPopover = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const toggleCart = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <CartButton onClick={toggleCart} />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={styles.cart}
            ref={cartRef}
            variants={cart}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", duration: 0.35 }}
          >
            <Cart />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CartPopover;

const cart: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: -20,
    visibility: "hidden",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    visibility: "visible",
  },
};
