import styles from "./Cart.module.css";
import { useCart } from "@features/cart/hooks/useCart";
import Button from "@shared/components/Button/Button";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const handleCheckout = () => {
    clearCart();
  };
  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <h2 className={styles.cart__title}>Cart</h2>
      </div>
      <div className={styles.cart__content}>
        {cart.length > 0 ? (
          <div className={styles.cart__items}>
            {cart.map((item, index) => {
              return <CartItem key={index} data={item} />;
            })}
            <div className={styles.cart__actions}>
              <Button onClick={handleCheckout}>Checkout</Button>
            </div>
          </div>
        ) : (
          <div className={styles["cart__items--empty"]}>
            Your cart is empty.
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import { CartItem as CartItemType } from "@features/cart/types";
import defaultThumbnail from "@assets/images/products/default_product_thumbnail.png";
import { DeleteIcon } from "@shared/components/SvgIcons/SvgIcons";
import { formatPriceToString } from "@/shared/utils/formatPriceToString";

interface CartItemProps {
  data: CartItemType;
}

export const CartItem = ({ data }: CartItemProps) => {
  const { id, name, price, quantity, totalPrice } = data;
  const thumbnail = data.images[0].thumbnailUrl;

  const { removeItemFromCart } = useCart();
  const handleRemove = () => {
    removeItemFromCart(id);
  };

  return (
    <div className={styles.item}>
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
    </div>
  );
};
