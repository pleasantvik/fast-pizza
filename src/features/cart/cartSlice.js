import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   cart: [],
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      //payload will be  a new item
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      //payload is item id
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      if (item.quantity > 0) {
        item.quantity--;
      }
      if (item.quantity === 0) {
        state.cart = state.cart.filter(
          (item) => item.pizzaId !== action.payload
        );
      }
      //Same as above
      //   if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
      item.totalPrice = item.quantity * item.unitPrice;
    },
    increaseItemQuantity: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  increaseItemQuantity,
  clearCart,
  decreaseItemQuantity,
  deleteItem,
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item?.pizzaId === id)?.quantity ?? 0;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export default cartSlice.reducer;
