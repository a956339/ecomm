import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    addtocart(state, action) {
      state.data.push(action.payload);
    },
    deletetocart(state, action) {
      state.data = state.data.filter((val) => {
        return val._id !== action.payload;
      });
    },
    incItem(state, action) {
      state.data.find((val) => {
        if (val._id == action.payload) {
          val.quantity++;
        }
      });
    },
    decItem(state, action) {
      state.data.find((val) => {
        if (val._id == action.payload) {
          val.quantity--;
        }
        if(val.quantity == 0){
          state.data = state.data.filter((val) => {
            return val._id !== action.payload;
          });
        }
      });
    },
    
  },
});

export const { addtocart, deletetocart, incItem,decItem } = cartSlice.actions;

export default cartSlice.reducer;
