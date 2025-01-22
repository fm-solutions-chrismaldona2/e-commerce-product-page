import styles from "./CartItem.module.css";
import { useCart } from "@features/cart/hooks/useCart";
import { CartItem as CartItemType } from "@features/cart/types";
import defaultThumbnail from "@assets/images/products/default_product_thumbnail.png";
import { DeleteIcon } from "@shared/components/SvgIcons/SvgIcons";
import { formatPriceToString } from "@/shared/utils/formatPriceToString";
import { motion, Variants } from "motion/react";

interface CartItemProps {
  data: CartItemType;
}

const CartItem = ({ data }: CartItemProps) => {
  const { id, name, price, quantity, totalPrice } = data;
  const thumbnail = data.images[0].thumbnailUrl;

  const { removeItemFromCart } = useCart();
  const handleRemove = () => {
    removeItemFromCart(id);
  };

  return (
    <motion.div
      className={styles.item}
      variants={item}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.item__thumbnailContainer}>
        <img
          src={thumbnail || defaultThumbnail}
          alt={`${name} thumbnail image.`}
          className={styles.item__thumbnail}
        />
      </div>
      <div className={styles.item__info}>
        <span className={styles.item__name}>{name}</span>
        <span className={styles.item__orderInfo}>
          {formatPriceToString(price)} x {quantity}
          <b className={styles.item__totalPrice}>
            {formatPriceToString(totalPrice)}
          </b>
        </span>
      </div>
      <div className={styles.item__actions}>
        <button
          className={styles.item__removeButton}
          onClick={handleRemove}
          aria-label="Remove item"
        >
          <DeleteIcon />
        </button>
      </div>
    </motion.div>
  );
};

export default CartItem;

const item: Variants = {
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
