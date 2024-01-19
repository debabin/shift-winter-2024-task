import { api } from '../instance';

export const getPokemons = ({ options }) =>
  api.get('pokemon/?limit=151', { ...(options && options) });
