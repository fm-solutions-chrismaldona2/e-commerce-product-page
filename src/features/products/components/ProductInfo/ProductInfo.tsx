import { ProductInfoProps } from "@features/products/types";
import styles from "./ProductInfo.module.css";
import { calcDiscountPrice } from "@shared/utils/calcDiscountPrice";
import { formatPriceToString } from "@shared/utils/formatPriceToString";

const ProductInfo = ({
  name,
  description,
  brand,
  price,
  discountPercentage,
}: ProductInfoProps) => {
  return (
    <aside className={styles.product__info}>
      <span className={styles.product__brand}>{brand}</span>
      <h1 className={styles.product__name}>{name}</h1>
      <p className={styles.product__description}>{description}</p>
      <div className={styles.product__priceWrapper}>
        <div className={styles.product__actualPrice}>
          <span className={styles.product__price}>
            {formatPriceToString(
              calcDiscountPrice(price, discountPercentage ?? 0)
            )}
          </span>
          <span className={styles.product__discount}>
            {discountPercentage}%
          </span>
        </div>
        <span className={styles.product__originalPrice}>
          {formatPriceToString(price)}
        </span>
      </div>
    </aside>
  );
};

export default ProductInfo;
