import { api } from '../instance';

export const getPokemons = (params) =>
  api.get('pokemon/?limit=151', { ...(params?.options && params.options) });
