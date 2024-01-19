import { useQuery } from '@tanstack/react-query';

import { getPokemons } from '../utils/api/requests';

export const RootPage = () => {
  const getPokemonsQuery = useQuery({
    queryKey: ['pokemons'],
    queryFn: getPokemons,
    select: ({ data }) => {
      return data.results.map((character, index) => (
        <div key={character.id} className={'pokemon'}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              index + 1
            }.png`}
            alt='character'
          />
          <div>{character.name}</div>
        </div>
      ));
    }
  });

  if (getPokemonsQuery.isLoading) return <div>loading...</div>;

  return (
    <>
      <h1>Pokemon first gen</h1>
      <div className='pokemons_container'>{getPokemonsQuery.data}</div>
    </>
  );
};
