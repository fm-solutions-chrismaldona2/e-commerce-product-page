import { Product } from "@features/products/types";

export interface CartItem extends Product {
  quantity: number;
  totalPrice: number;
}
