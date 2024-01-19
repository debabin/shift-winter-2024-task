import { createAsyncThunk } from '@reduxjs/toolkit';

import { getPokemons } from '../../api/requests';

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async () => {
  const response = await getPokemons();
  return response.data.results;
});
