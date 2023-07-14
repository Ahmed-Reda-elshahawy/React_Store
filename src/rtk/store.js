import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/ProductsSlice";
import CardSlice from "./slices/CardSlice";


export default configureStore({
    reducer: {
        Products: ProductsSlice,
        Cards: CardSlice,
    }
})