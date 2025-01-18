import styles from "./ProductPreviewModal.module.css";
import { useState } from "react";
import { ProductPreviewModalProps } from "@features/products/types";
import { motion, Variants } from "motion/react";
import { CloseIcon } from "@/shared/components/SvgIcons/SvgIcons";
import Backdrop from "@shared/components/Backdrop/Backdrop";
import { useSliderKeys } from "@features/products/hooks/useSliderKeys";
import { useModalkeys } from "@/shared/hooks/useModalKeys";

const ProductPreviewModal = ({
  name = "Product",
  images,
  currentImageIndex = 0,
  onClose,
}: ProductPreviewModalProps) => {
  const [currentImage, setCurrentImage] = useState<number>(currentImageIndex);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useSliderKeys({
    onLeft: previousImage,
    onRight: nextImage,
    isActive: true,
  });

  useModalkeys({ onClose: onClose });

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
          {images.map(({ src, thumbnailSrc }, index) => {
            return (
              <div
                className={styles["image__wrapper--carrousel"]}
                key={index}
                tabIndex={0}
                onClick={() => setCurrentImage(index)}
                role="button"
                aria-label="Change preview image"
              >
                <img
                  src={thumbnailSrc || src}
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
