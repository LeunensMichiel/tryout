import { Breadcrumb, Button, Progress, Spin } from 'antd';
import { FC, useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Page } from '../components';
import { API_URL } from '../config';
import { Pokemon, PokemonBase } from '../models';

import './pokemonDetail.scss';

type RouteProps = {
  id: string;
};

export const PokemonDetail: FC = () => {
  const { id } = useParams<RouteProps>();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const removePokemon = useCallback(async () => {
    const confirmAction = confirm('Are you sure to remove this pokemon?');
    if (!confirmAction) {
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/pokemons/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Could not delete pokemon`);
      }

      const pokemon = await response.json();
      setPokemon(pokemon);
      setError(null);
      navigate('/');
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      }
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/pokemons/${id}`);

        if (!response.ok) {
          throw new Error(`Could not fetch pokemon`);
        }

        const pokemon = await response.json();
        setPokemon(pokemon);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };
    getPokemons();
  }, [id]);

  if (error) {
    return (
      <Page>
        <p>{error}</p>
      </Page>
    );
  }

  if (loading) {
    return (
      <Page>
        <Spin spinning />
      </Page>
    );
  }

  return (
    <Page>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Kanto Dex</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/${pokemon?.id}`}>{pokemon?.name}</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
      <div className="detail__container">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
            pokemon?.id
          ).padStart(3, '0')}.png`}
        />
        <div className="cards">
          <div className="info detail__item">
            <span className="pokemon__detail-nr">
              # {String(pokemon?.id).padStart(3, '0')}
            </span>
            <span className="pokemon__detail-name">{pokemon?.name}</span>
            <div className="pokemon-types">
              {pokemon?.type.map((type) => (
                // https://codepen.io/jkneb/pen/rLEvOg
                <div className={`pkm-type ${type.toLowerCase()}`} key={type}>
                  <span>{type}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="stats detail__item">
            {pokemon?.base &&
              Object.keys(pokemon?.base)?.map((base) => (
                <div key={base} className="stat">
                  <span className="base">{base}</span>
                  <Progress
                    strokeColor="#ffcb05"
                    percent={
                      (pokemon.base[base as keyof PokemonBase] / 221) * 100
                    }
                    showInfo={false}
                  />
                  <span className="stat__value">
                    {pokemon.base[base as keyof PokemonBase]}
                  </span>
                </div>
              ))}
          </div>
          <div className="buttons">
            <Button
              size="large"
              danger
              onClick={removePokemon}
              loading={loading}
            >
              DELETE
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};
