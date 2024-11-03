import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Manufacturer, Product} from "@/store/types";
import {initialProducts} from "@/core/data/initial-products";
import {RootState} from "@/store/store";
import {initialManufacturers} from "@/core/data/initial-manufacturers";

interface ProductState {
    products: Product[],
    selectedProduct: Product,
    manufacturers: Manufacturer[],
}

const initialState: ProductState = {
    products: initialProducts,
    selectedProduct: null,
    manufacturers: initialManufacturers
};
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct: (state, action:PayloadAction<Product>) => {
            state.products = [...state.products, action.payload];
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },
        editProduct: (state, action:PayloadAction<Product>) => {
            state.products = state.products.map((product) =>
                product.id === action.payload.id ? action.payload : product
            );
        },
        setSelectProduct: (state, action: PayloadAction<string>) => {
            state.selectedProduct = state.products.find((product) => product.id === action.payload) || null;
        },
    },
});

export const {
    addProduct,
    removeProduct,
    setSelectProduct,
    editProduct
} = productsSlice.actions;
export const selectProductList = (state: RootState): Product[] => state.products.products;
export const selectManufacturersList = (state: RootState): Manufacturer[] => state.products.manufacturers;
export const selectProduct = (state: RootState): Product => state.products.selectedProduct;
export const selectTopAndBottomProducts = createSelector(
    [selectProductList],
    (products) => {
        if (!products) return [];
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        const top5 = sortedProducts.slice(0, 5).map((product) => ({
            label: product.name,
            value: product.price,
        }));
        const bottom5 = sortedProducts.slice(-5).map((product) => ({
            label: product.name,
            value: product.price,
        }));
        return [...top5, ...bottom5];
    }
);
export const selectProductCountByManufacturer = createSelector(
    [selectProductList, selectManufacturersList],
    (products, manufacturers) => {
        const productCountByManufacturer = products.reduce((countMap, product) => {
            countMap[product.manufacturer.id] = (countMap[product.manufacturer.id] || 0) + 1;
            return countMap;
        }, {} as Record<number, number>);

        return manufacturers.map((manufacturer) => ({
            label: manufacturer.name,
            value: productCountByManufacturer[manufacturer.id] || 0,
        }));
    }
);

export default productsSlice.reducer;