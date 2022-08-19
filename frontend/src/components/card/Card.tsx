import { FC } from 'react';
import { Pokemon } from '../../models';

import './card.scss';

type CardProps = {
  pokemon: Pokemon;
};

export const Card: FC<CardProps> = ({ pokemon }) => {
  // Images courtecy of the official pokemon API
  return (
    <div className="card">
      <img
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(
          pokemon.id
        ).padStart(3, '0')}.png`}
      />
      <div className="card__body">
        <span className="pokemon-nr">
          # {String(pokemon.id).padStart(3, '0')}
        </span>
        <span className="pokemon-name">{pokemon.name}</span>
        <div className="pokemon-types">
          {pokemon.type.map((type) => (
            // https://codepen.io/jkneb/pen/rLEvOg
            <div className={`pkm-type ${type.toLowerCase()}`} key={type}>
              <span>{type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
