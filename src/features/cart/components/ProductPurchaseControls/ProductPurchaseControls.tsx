import styles from "./ProductPurchaseControls.module.css";
import { useState } from "react";
import { Product } from "@features/products/types";
import AddToCartButton from "@features/cart/components/AddToCartButton/AddToCartButton";
import ProductQuantityPicker from "@features/cart/components/ProductQuantityPicker/ProductQuantityPicker";
import { cartLimits } from "@features/cart/constants/cartLimits";

interface ProductPurchaseControlsProps {
  product: Product;
}

const ProductPurchaseControls = ({ product }: ProductPurchaseControlsProps) => {
  const { id } = product;
  const [quantity, setQuantity] = useState<number>(0);

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
    if (quantity === cartLimits.minPerProduct) {
      setQuantity(1);
    } else {
      setQuantity(0); //resets
    }
    console.log(`added ${quantity} of ${id} to cart`);
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
        <AddToCartButton onClick={handleAddToCart} />
      </div>
    </div>
  );
};

export default ProductPurchaseControls;
