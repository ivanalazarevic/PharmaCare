import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Product} from "@/store/types";
import {initialProducts} from "@/core/data/initial-products";
import {RootState} from "@/store/store";

interface ProductState {
    products: Product[],
    selectedProduct: Product
}

const initialState: ProductState = {
    products: initialProducts,
    selectedProduct: null
};
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProducts: (state, action) => {
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            console.log(action.payload)
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        editProduct: (state, action) => {
        },
        setSelectProduct: (state, action: PayloadAction<string>) => {
            state.selectedProduct = state.products.find((product) => product.id === action.payload) || null;
        },
    },
});

export const {
    addProducts,
    removeProduct,
    setSelectProduct,
    editProduct
} = productsSlice.actions;
export const selectProductList = (state: RootState): Product[] => state.products.products;

export default productsSlice.reducer;