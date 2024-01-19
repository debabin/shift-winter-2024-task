import { configureStore } from '@reduxjs/toolkit';

import { pokemonsReducer, prefix as pokemonsPrefix } from './pokemons/slice';

export const store = configureStore({
  reducer: { [pokemonsPrefix]: pokemonsReducer }
});
