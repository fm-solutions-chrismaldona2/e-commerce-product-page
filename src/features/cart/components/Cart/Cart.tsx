import styles from "./Cart.module.css";
import { useCart } from "@features/cart/hooks/useCart";
import { AnimatePresence, motion, Variants } from "motion/react";
import CartItem from "@features/cart/components/CartItem/CartItem";
import Button from "@shared/components/Button/Button";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const handleCheckout = () => {
    clearCart();
  };

  return (
    <motion.div className={styles.cart}>
      <div className={styles.cart__header}>
        <h2 className={styles.cart__title}>Cart</h2>
      </div>
      <div className={styles.cart__content}>
        <AnimatePresence>
          {cart.length > 0 ? (
            <div className={styles.cart__items}>
              {cart.map((item, index) => {
                return <CartItem key={index} data={item} />;
              })}
              <motion.div
                className={styles.cart__actions}
                variants={popVariant}
                initial="hidden"
                animate="visible"
              >
                <Button onClick={handleCheckout}>Checkout</Button>
              </motion.div>
            </div>
          ) : (
            <div className={styles["cart__items--empty"]}>
              <motion.span
                variants={popVariant}
                initial="hidden"
                animate="visible"
              >
                Your cart is empty.
              </motion.span>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Cart;

const popVariant: Variants = {
  hidden: {
    scale: 0.8,
    transition: {
      type: "spring",
      duration: 0.35,
    },
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.35,
    },
  },
};
