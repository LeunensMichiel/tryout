import { FC, useEffect, useState } from 'react';
import { Page } from '../components/page';
import { API_URL } from '../config';
import { Pokemon } from '../models';

export const PokemonList: FC = () => {
  const [pokemons, setPokemons] = useState<Array<Pokemon>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/pokemons`);

        if (!response.ok) {
          throw new Error(`Could not fetch pokemons`);
        }

        let pokemons = await response.json();
        setPokemons(pokemons);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setPokemons([]);
      } finally {
        setLoading(false);
      }
    };
    getPokemons();
  }, []);

  console.log(pokemons);
  return (
    <Page>
      {pokemons.map((pokemon) => (
        <div>{pokemon.name}</div>
      ))}
    </Page>
  );
};
