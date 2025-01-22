import styles from "./ProductPreview.module.css";
import { useState } from "react";
import { ProductPreviewProps } from "@features/products/types";
import ProductPreviewModal from "@features/products/components/ProductPreviewModal/ProductPreviewModal";
import { AnimatePresence } from "motion/react";
import { useSliderKeys } from "@features/products/hooks/useSliderKeys";
import defaultThumbnail from "@assets/images/products/default_product_thumbnail.png";
import PreviewControlButton from "@features/products/components/PreviewControlButton/PreviewControlButton";
import useMediaQuery from "@shared/hooks/useMediaQuery";

const ProductPreview = ({ name = "Product", images }: ProductPreviewProps) => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 48rem)");

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
        {isModalOpen && !isMobile && (
          <ProductPreviewModal
            name={name}
            images={images}
            currentImageIndex={currentImage}
            onClose={toggleModal}
          />
        )}
      </AnimatePresence>

      <div className={styles.images__wrapper}>
        <div className={styles.images__selected}>
          <img
            src={images[currentImage].url}
            alt={`${name} Preview`}
            className={styles.image__selectedImg}
            width={494}
            height={494}
            role="button"
            aria-label="Open preview modal"
            onClick={!isMobile ? toggleModal : undefined}
          />
          <div className={styles.images__controls}>
            <PreviewControlButton
              type="previous"
              onClick={previousImage}
              size="small"
            />
            <PreviewControlButton
              type="next"
              onClick={nextImage}
              size="small"
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
                  src={thumbnailUrl || url || defaultThumbnail}
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
