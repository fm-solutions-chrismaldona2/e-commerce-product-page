import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { CartItem } from "@features/cart/types";
import { cleared } from "@features/cart/store/cartSlice";

export const useCart = () => {
  const cart = useAppSelector((state) => state.cart.items);

  const dispatch = useAppDispatch();

  const addItemToCart = () => {};

  const clearCart = () => {
    dispatch(cleared());
  };

  return { cart, addItemToCart, clearCart };
};
