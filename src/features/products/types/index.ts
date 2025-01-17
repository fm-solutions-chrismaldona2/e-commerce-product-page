export type Product = {
  id: number;
  name: string;
  description: string;
  brand: string;
  price: number;
  discountPercentage?: number;
  images: ProductImages[];
};

interface ProductImages {
  id: number;
  src: string;
}

export type ProductInfoProps = Omit<Product, "images">;

export type ProductPreviewProps = {
  name: string;
  images: ProductImages[];
};

export interface ProductPreviewModalProps extends ProductPreviewProps {
  currentImageIndex?: number;
  onClose: () => void;
}
