import { createSlice } from "@reduxjs/toolkit";

const cartStore = createSlice({
  name: "cart",
  initialState: {
    items: [],
    name: 'aditya',
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const newArr = state.items.filter((ele) => {
        if (ele?.card?.info?.id !== action.payload?.card?.info?.id) return ele;
      });
    //   state.items = newArr
    return {...state, items: newArr}
    },
    clearCart: (state) => {
        return {...state, items: []}
    },
  },
});

export const { addItem, removeItem, clearCart } = cartStore.actions;
export default cartStore.reducer;
