import styles from "./ProductQuantityPicker.module.css";
import { motion } from "motion/react";
import { MinusIcon, PlusIcon } from "@shared/components/SvgIcons/SvgIcons";

interface ProductQuantityPickerProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ProductQuantityPicker = ({
  quantity,
  onIncrement,
  onDecrement,
}: ProductQuantityPickerProps) => {
  return (
    <div className={styles.picker}>
      <button className={styles.picker__button} onClick={onDecrement}>
        <MinusIcon className={styles.picker__buttonIcon} />
      </button>

      <motion.span
        className={styles.picker__quantity}
        key={quantity}
        initial={{ scale: 1 }}
        animate={{ scale: [1.2, 1] }}
        transition={{
          duration: 0.35,
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {quantity}
      </motion.span>

      <button className={styles.picker__button} onClick={onIncrement}>
        <PlusIcon className={styles.picker__buttonIcon} />
      </button>
    </div>
  );
};

export default ProductQuantityPicker;
