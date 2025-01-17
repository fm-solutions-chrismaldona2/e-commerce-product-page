import styles from "./ProductDetailsLayout.module.css";
import { LayoutComponentProps } from "@/shared/types";

const ProductDetailsLayout = ({ children }: LayoutComponentProps) => {
  return (
    <div className={styles.layout}>
      <article className={styles.product}>{children}</article>
    </div>
  );
};

export default ProductDetailsLayout;
