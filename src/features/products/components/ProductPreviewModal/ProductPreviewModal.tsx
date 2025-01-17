import styles from "./ProductPreviewModal.module.css";
import { useEffect, useState } from "react";
import { ProductPreviewModalProps } from "@features/products/types";
import { motion, Variants } from "motion/react";
import { CloseIcon } from "@/shared/components/SvgIcons/SvgIcons";
import Backdrop from "@shared/components/Backdrop/Backdrop";

const ProductPreviewModal = ({
  name,
  images,
  currentImageIndex = 0,
  onClose,
}: ProductPreviewModalProps) => {
  const [currentImage, setCurrentImage] = useState<number>(currentImageIndex);

  useEffect(() => {
    const closeOnEscapePressed = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", closeOnEscapePressed);
    return () => window.removeEventListener("keydown", closeOnEscapePressed);
  }, [onClose]);

  return (
    <Backdrop>
      <motion.div
        className={styles.modal}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.35, type: "spring" }}
      >
        <button
          onClick={onClose}
          className={styles.modal__close}
          aria-label="Close modal"
        >
          <CloseIcon className={styles.modal__closeIcon} />
        </button>

        <img
          src={images[currentImage].src}
          alt={`${name} Preview`}
          className={styles.image__selected}
          width={494}
          height={494}
        />

        <div className={styles.images__carrousel}>
          {images.map(({ id, src }, index) => {
            return (
              <div
                className={styles["image__wrapper--carrousel"]}
                key={id}
                tabIndex={0}
                onClick={() => setCurrentImage(index)}
                role="button"
                aria-label="Change preview image"
              >
                <img
                  src={src}
                  alt={`${name} Preview #${index}`}
                  className={`${styles["image--carrousel"]} ${
                    currentImage === index &&
                    styles["image--carrousel--selected"]
                  }`}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </Backdrop>
  );
};

export default ProductPreviewModal;

const modalVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
