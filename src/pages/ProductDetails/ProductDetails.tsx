import ProductInfo from "@features/products/components/ProductInfo/ProductInfo";
import ProductDetailsLayout from "./layouts/ProductDetailsLayout/ProductDetailsLayout";
import ProductPreview from "@features/products/components/ProductPreview/ProductPreview";
import { products } from "@features/products/mocks/product";

const ProductDetails = () => {
  const [productData] = products;
  return (
    <ProductDetailsLayout>
      <ProductPreview name={productData.name} images={productData.images} />
      <ProductInfo product={productData} />
    </ProductDetailsLayout>
  );
};

export default ProductDetails;
