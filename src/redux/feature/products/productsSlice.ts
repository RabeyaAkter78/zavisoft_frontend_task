// redux/features/products/productsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}
interface ProductsState {
  selectedProduct: Product | null;
}

const initialState: ProductsState = {
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedProduct(state, action: PayloadAction<Product>) {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct(state) {
      state.selectedProduct = null;
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } =
  productsSlice.actions;

export default productsSlice.reducer;
