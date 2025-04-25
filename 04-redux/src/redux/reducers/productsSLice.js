import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunks for fetching and posting products
export const getProductThunk = createAsyncThunk("/products/get", async () => {
  const res = await axios.get("https://fakestoreapi.com/products");
  return res.data; // Return product data
});

export const postProductThunk = createAsyncThunk(
  "/products/post",
  async (data) => {
    await axios.post("https://fakestoreapi.com/products", data);
    return data;
  }
);

// products slice
const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [], // Initialize products as an empty array
    loading: false, // Initialize loading state
    error: null, // Initialize error state
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true; // Set loading to true when request starts
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false; // Set loading to false when data is fetched
        state.products = action.payload; // Set fetched products to the state
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false; // Set loading to false on error
        state.error = action.error.message; // Set error message
      });
  },
});

export default productsSlice.reducer;
