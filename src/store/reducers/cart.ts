import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CardProps } from "../../components/PerfilCard";

type CartState = {
  items: CardProps[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CardProps>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.title !== action.payload);
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { add, close, open, remove } = cartSlice.actions;
export default cartSlice.reducer;
