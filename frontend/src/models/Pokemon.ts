export type PokemonBase = {
  HP: number;
  Attack: number;
  Defense: number;
  'Sp. Attack': number;
  'Sp. Defense': number;
  Speed: number;
};

export type Pokemon = {
  id: number;
  name: string;
  type: string[];
  base: PokemonBase;
};

export type PokemonInput = {
  name: string;
  type: string[];
  base: PokemonBaseInput;
};

export type PokemonBaseInput = {
  HP: number;
  Attack: number;
  Defense: number;
  SpAttack: number;
  SpDefense: number;
  Speed: number;
};
