import { Skeleton, Space } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Page } from '../components';
import { API_URL } from '../config';
import { Pokemon } from '../models';

import './pokemonList.scss';

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

        const pokemons = await response.json();
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

  if (error) {
    return (
      <Page>
        <p>{error}</p>
      </Page>
    );
  }

  return (
    <Page>
      <div className="list">
        {loading ? (
          <>
            <Space direction="vertical">
              <Skeleton.Image active />
              <Skeleton.Input active />
            </Space>
            <Space direction="vertical">
              <Skeleton.Image active />
              <Skeleton.Input active />
            </Space>
            <Space direction="vertical">
              <Skeleton.Image active />
              <Skeleton.Input active />
            </Space>
            <Space direction="vertical">
              <Skeleton.Image active />
              <Skeleton.Input active />
            </Space>
            <Space direction="vertical">
              <Skeleton.Image active />
              <Skeleton.Input active />
            </Space>
          </>
        ) : (
          <>
            {pokemons.map((pokemon) => (
              <Link key={pokemon.id} to={`/${pokemon.id}`}>
                <Card pokemon={pokemon} />
              </Link>
            ))}
          </>
        )}
      </div>
    </Page>
  );
};
