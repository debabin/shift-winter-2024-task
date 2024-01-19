import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './thunks';

const initialState = {
  isLoading: true,
  list: []
};

export const prefix = 'pokemons';
const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      });
  }
});

export const pokemonsReducer = pokemonsSlice.reducer;
