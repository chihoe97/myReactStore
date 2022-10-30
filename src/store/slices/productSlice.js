import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productItems: [],
    singleItem: {}
  },
  reducers: {
    getItems: (state, action) => {
      state.productItems = action.payload;
    },
    getSingleItem: (state, action) => {
      state.singleItem = action.payload;
    }
  }
});

export const getItemsAsync = () => async (dispatch) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch(getItems(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const getSingleItemAsync = (item) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${item}`
    );
    console.log("response.data", response.data);
    dispatch(getSingleItem(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getItems, getSingleItem } = productSlice.actions;
export default productSlice.reducer;
