export type Product = {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  discountPercentage?: number;
  images: ProductImages[];
  thumbnail?: ProductImages;
};

interface ProductImages {
  url: string;
  thumbnailUrl?: string;
}

export type ProductPreviewProps = {
  name?: string;
  images: ProductImages[];
};

export interface ProductPreviewModalProps extends ProductPreviewProps {
  currentImageIndex?: number;
  onClose: () => void;
}
