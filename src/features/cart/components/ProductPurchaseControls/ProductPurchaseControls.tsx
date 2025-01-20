import styles from "./ProductPurchaseControls.module.css";
import { useState } from "react";
import { Product } from "@features/products/types";
import ProductQuantityPicker from "@features/cart/components/ProductQuantityPicker/ProductQuantityPicker";
import { cartLimits } from "@features/cart/constants/cartLimits";
import Button from "@shared/components/Button/Button";
import { CartIcon } from "@shared/components/SvgIcons/SvgIcons";
import { useCart } from "@features/cart/hooks/useCart";

interface ProductPurchaseControlsProps {
  product: Product;
}

const ProductPurchaseControls = ({ product }: ProductPurchaseControlsProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const { addItemToCart } = useCart();

  const handleIncrement = () => {
    if (quantity < cartLimits.maxPerProduct) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > cartLimits.minPerProduct) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItemToCart(product, quantity);
  };

  return (
    <div className={styles.controls}>
      <div className={styles.controls__picker}>
        <ProductQuantityPicker
          quantity={quantity}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
      <div className={styles.controls__submit}>
        <Button onClick={handleAddToCart}>
          <CartIcon />
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductPurchaseControls;
