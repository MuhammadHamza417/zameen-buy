import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: [],
  cart: [],
};

const wishlistSlice = createSlice({
  name: 'appStore',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const exists = state.wishlist.find(item => item.id === action.payload.id);
      if (!exists) {
        state.wishlist.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload);
    },
    addToCart: (state, action) => {
      const exists = state.cart.find(item => item.id === action.payload.id);
      if (!exists) {
        state.cart.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist, addToCart, removeFromCart } = wishlistSlice.actions;
export default wishlistSlice.reducer;