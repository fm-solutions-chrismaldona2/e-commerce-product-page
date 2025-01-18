import styles from "./ProductPreview.module.css";
import { useState } from "react";
import { ProductPreviewProps } from "@features/products/types";
import ProductPreviewModal from "../ProductPreviewModal/ProductPreviewModal";
import { AnimatePresence } from "motion/react";
import { useSliderKeys } from "@features/products/hooks/useSliderKeys";

const ProductPreview = ({ name = "Product", images }: ProductPreviewProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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
    onEnter: toggleModal,
    isActive: !isModalOpen,
  });

  return (
    <>
      <AnimatePresence>
        {isModalOpen && (
          <ProductPreviewModal
            name={name}
            images={images}
            currentImageIndex={currentImage}
            onClose={toggleModal}
          />
        )}
      </AnimatePresence>

      <div className={styles.images__wrapper}>
        <img
          src={images[currentImage].src}
          alt={`${name} Preview`}
          className={styles.image__selected}
          width={494}
          height={494}
          role="button"
          aria-label="Open preview modal"
          onClick={toggleModal}
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
      </div>
    </>
  );
};

export default ProductPreview;
