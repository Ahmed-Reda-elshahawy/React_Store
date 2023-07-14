import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// fetch AllProducts
export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = res.json();
    return data;
})

// fetch Categories
export const FetchCategories = createAsyncThunk("CategoriesSlice/FetchCategories", async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data = await res.json();
    console.log(data)
    return data;
})

// fetch products in specific Category
export const FetchProductsInCategory = createAsyncThunk("CategoriesSlice/FetchProductsInCategory", async (category) => {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await res.json();
    return data;
})

const productsSlice = createSlice({
    initialState: [],
    name: "productsSlice",
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
        }).addCase(FetchCategories.fulfilled, (state, action) => {
            console.log(action.payload);
        }).addCase(FetchProductsInCategory.fulfilled, (state, action) => {
            return action.payload;
        })
    },
});


export default productsSlice.reducer;