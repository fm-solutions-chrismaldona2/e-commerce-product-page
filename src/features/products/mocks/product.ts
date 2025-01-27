import { Product } from "@features/products/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    brand: "Sneaker Company",
    price: 250.0,
    discountPercentage: 50,
    images: [
      {
        url: "/images/products/product-1/image-product-1.jpg",
        thumbnailUrl:
          "/images/products/product-1/image-product-1-thumbnail.jpg",
      },
      {
        url: "/images/products/product-1/image-product-2.jpg",
        thumbnailUrl:
          "/images/products/product-1/image-product-2-thumbnail.jpg",
      },
      {
        url: "/images/products/product-1/image-product-3.jpg",
        thumbnailUrl:
          "/images/products/product-1/image-product-3-thumbnail.jpg",
      },
      {
        url: "/images/products/product-1/image-product-4.jpg",
        thumbnailUrl:
          "/images/products/product-1/image-product-4-thumbnail.jpg",
      },
    ],
  },
];
