import { Alert, Button } from 'antd';
import { FC, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Page } from '../components';
import { API_URL } from '../config';
import { Pokemon, PokemonInput } from '../models';

import './pokemonCreate.scss';

type FormValues = PokemonInput;

export const PokemonCreate: FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createPokemon = useCallback(
    async (values: FormValues) => {
      const pokemon: Omit<Pokemon, 'id'> = {
        ...values,
        base: {
          'Sp. Attack': values.base.SpAttack,
          'Sp. Defense': values.base.SpDefense,
          ...values.base,
        },
      };
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/pokemons`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pokemon),
        });

        if (!response.ok) {
          throw new Error(`Could not delete pokemon`);
        }

        setError(null);
        navigate('/');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [navigate]
  );

  return (
    <Page>
      {error && <Alert message={error} type="error" />}
      <form onSubmit={handleSubmit(createPokemon)} className="form">
        <input
          {...register('name', {
            required: 'This field is required',
          })}
          placeholder="Name"
          required
        />
        <select
          {...register('type', {
            required: 'This field is required',
          })}
          multiple
          required
        >
          <option value="Fire">Fire</option>
          <option value="Water">Water</option>
          <option value="Grass">Grass</option>
          <option value="Rock">Rock</option>
          <option value="Ground">Ground</option>
          <option value="Flying">Flying</option>
          <option value="Normal">Normal</option>
          <option value="Ghost">Ghost</option>
          <option value="Steel">Steel</option>
          <option value="Dark">Dark</option>
        </select>
        <input
          {...register('base.Attack', {
            required: 'This field is required',
          })}
          placeholder="Attack"
          type="number"
          required
        />
        <input
          {...register('base.Defense', {
            required: 'This field is required',
          })}
          placeholder="Defense"
          type="number"
          required
        />
        <input
          {...register('base.HP', {
            required: 'This field is required',
          })}
          placeholder="HP"
          type="number"
          required
        />
        <input
          {...register('base.SpAttack', {
            required: 'This field is required',
          })}
          placeholder="Sp. Attack"
          type="number"
          required
        />
        <input
          {...register('base.SpDefense', {
            required: 'This field is required',
          })}
          placeholder="Sp. Defense"
          type="number"
          required
        />
        <input
          {...register('base.Speed', {
            required: 'This field is required',
          })}
          placeholder="Speed"
          type="number"
          required
        />
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          loading={loading}
          disabled={loading}
        >
          CREATE
        </Button>
      </form>
    </Page>
  );
};
