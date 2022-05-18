import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import petsService from "../../services/pets.service";

const initialState = {
    loading: true,
    cats: [],
    dogs: [],
};

export const fetchPetsFromApi = createAsyncThunk(
    "pets/getPets",
    async () => {
        const [dogs, cats] = await Promise.all([
            petsService.getDogs(),
            petsService.getCats(),
        ]);

        return { dogs, cats };
    }
)

const petsSlices = createSlice({
    name: "pets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPetsFromApi.fulfilled, (state, action) => {
            state.dogs = action.payload.dogs;
            state.cats = action.payload.cats;
            state.loading = false;
        });
    }
});

export default petsSlices.reducer;
