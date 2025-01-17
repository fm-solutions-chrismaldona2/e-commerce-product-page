import styles from "./ProductPreview.module.css";
import { useState } from "react";
import { ProductPreviewProps } from "@features/products/types";
import ProductPreviewModal from "../ProductPreviewModal/ProductPreviewModal";
import { AnimatePresence } from "motion/react";

const ProductPreview = ({ name, images }: ProductPreviewProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

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
      </div>
    </>
  );
};

export default ProductPreview;
