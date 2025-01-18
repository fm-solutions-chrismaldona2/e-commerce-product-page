import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "@features/cart/types";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleared(state) {
      state.items = [];
    },
    itemAdded(state, action: PayloadAction<CartItem>) {},
  },
});

export const { cleared } = cartSlice.actions;
export default cartSlice.reducer;
