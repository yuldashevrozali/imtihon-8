// store/productsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
  },
});

export const { addProduct, addToCart } = productsSlice.actions;

export default productsSlice.reducer;
