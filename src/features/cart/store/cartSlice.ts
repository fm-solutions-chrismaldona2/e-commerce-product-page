// I know, mutating state in React feels weird.

// But thanks to 'Immer' (a library included in Redux Toolkit), it's now possible—while still creating a new copy behind the scenes.

// It reduces complexity, improves readability, and is now the recommended approach, so I'm giving it a shot!

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@features/cart/types";

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemAdded(state, action: PayloadAction<CartItem>) {
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    itemRemoved(state, action: PayloadAction<CartItem["id"]>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    cleared(state) {
      state.items = [];
    },
  },
});

export const { itemAdded, itemRemoved, cleared } = cartSlice.actions;
export default cartSlice.reducer;
