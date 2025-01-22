import styles from "./ProductPreviewModal.module.css";
import { useState } from "react";
import { ProductPreviewModalProps } from "@features/products/types";
import { motion, Variants } from "motion/react";
import { CloseIcon } from "@shared/components/SvgIcons/SvgIcons";
import Backdrop from "@shared/components/Backdrop/Backdrop";
import { useSliderKeys } from "@features/products/hooks/useSliderKeys";
import { useModalkeys } from "@/shared/hooks/useModalKeys";
import defaultThumbnail from "@assets/images/default_product_thumbnail.png";
import PreviewControlButton from "@features/products/components/PreviewControlButton/PreviewControlButton";

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

        <div className={styles.images__current}>
          <div className={styles.images__previousButton}>
            <PreviewControlButton
              type="previous"
              onClick={previousImage}
              size="normal"
            />
          </div>
          <img
            src={images[currentImage].url}
            alt={`${name} Preview`}
            onError={(e) => {
              e.currentTarget.src = defaultThumbnail;
            }}
            className={styles.image__selected}
            width={494}
            height={494}
          />
          <div className={styles.images__nextButton}>
            <PreviewControlButton
              type="next"
              onClick={nextImage}
              size="normal"
            />
          </div>
        </div>

        <div className={styles.images__carrousel}>
          {images.map(({ url, thumbnailUrl }, index) => {
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
                  src={thumbnailUrl || url}
                  alt={`${name} Preview #${index}`}
                  onError={(e) => {
                    e.currentTarget.src = defaultThumbnail;
                  }}
                  width={76}
                  height={76}
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
