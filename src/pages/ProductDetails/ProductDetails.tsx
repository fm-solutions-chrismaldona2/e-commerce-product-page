import ProductInfo from "@features/products/components/ProductInfo/ProductInfo";
import ProductDetailsLayout from "./layouts/ProductDetailsLayout/ProductDetailsLayout";
import ProductPreview from "@features/products/components/ProductPreview/ProductPreview";
import { products } from "@features/products/mocks/product";

const ProductDetails = () => {
  const [product] = products;
  return (
    <ProductDetailsLayout>
      <ProductPreview name={product.name} images={product.images} />
      <ProductInfo {...product} />
    </ProductDetailsLayout>
  );
};

export default ProductDetails;
