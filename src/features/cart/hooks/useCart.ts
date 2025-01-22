import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { calcDiscountPrice } from "@shared/utils/calcDiscountPrice";

import {
  cleared,
  itemAdded,
  itemRemoved,
} from "@features/cart/store/cartSlice";
import { Product } from "@features/products/types";

export const useCart = () => {
  const cart = useAppSelector((state) => state.cart.items);
  const dispatch = useAppDispatch();

  const addItemToCart = (item: Product, quantity: number) => {
    const price = calcDiscountPrice(item.price, item.discountPercentage || 0);
    dispatch(
      itemAdded({ ...item, price, quantity, totalPrice: price * quantity })
    );
  };

  const removeItemFromCart = (id: Product["id"]) => {
    dispatch(itemRemoved(id));
  };

  const clearCart = () => {
    dispatch(cleared());
  };

  const getCartLength = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return { cart, getCartLength, addItemToCart, removeItemFromCart, clearCart };
};
