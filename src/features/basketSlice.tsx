import { createSlice } from "@reduxjs/toolkit";

export interface BasketState{
  items: any[]
  input: string | number
  user: string | null 
}
const initialState: BasketState = {
  items: [],
  input: "",
  user: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );
      const newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `can't remove product (id ${action.payload.id}) as it's not in basket!`
        );
      }
      state.items = newBasket;
    },
    inputValue: (state, action) => {
      state.input = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addToBasket, removeFromBasket, inputValue, setUser } =
  basketSlice.actions;

export const selectItems = (state: { basket: { items: any; }; }) => state.basket.items;
export const selectInput = (state: { basket: { input: string; }; }) => state.basket.input;
export const selectUser = (state: { basket: { user: string | null; }; }) => state.basket.user;

export default basketSlice.reducer;