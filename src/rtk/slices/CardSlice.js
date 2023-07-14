import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    initialState: [],
    name: "cardSlice",
    reducers: {
        addToCard: (state, action) => {
            const cloneCard = { ...action.payload, quantity: 1 };
            let recureProduct = state.find((product) => product.id === action.payload.id);
            (recureProduct ? (recureProduct.quantity += 1) : state.push(cloneCard));
        },
        removeFromCard: (state, action) => {
            return state.filter((product) => { return product.id !== action.payload.id })
        },
        Clear: (state, action) => {
            return [];
        },
    }
});


export const { addToCard, removeFromCard, Clear } = cardSlice.actions;
export default cardSlice.reducer;