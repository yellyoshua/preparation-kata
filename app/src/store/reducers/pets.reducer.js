import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    cats: [],
    dogs: [],
};

const petsSlices = createSlice({
    name: "pets",
    initialState,
    reducers: {
        getPets(state, action) {
            const { dogs, cats, loading } = action.payload || {};
            state.dogs = dogs ?? [];
            state.cats = cats ?? [];
            state.loading = loading ?? false;
        }
    }
});

export const { getPets } = petsSlices.actions;
export default petsSlices.reducer;
