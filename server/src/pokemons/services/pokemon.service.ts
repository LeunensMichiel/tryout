import { Injectable } from '@nestjs/common';
import * as pokemonJson from '../data/pokemons.json';
import { CreatePokemonDto, PokemonDto } from '../dto/pokemon.dto';

@Injectable()
export class PokemonService {
    private pokemons: PokemonDto[];

    constructor() {
        this.pokemons = pokemonJson;
    }

    findAll(): PokemonDto[] {
        return this.pokemons;
    }

    findOne(id: number): PokemonDto {
        return this.pokemons.find((pkm) => pkm.id === id);
    }

    createMon(pokemon: CreatePokemonDto): PokemonDto {
        const id = this.pokemons?.[this.pokemons?.length - 1].id + 1;
        const newMon: PokemonDto = { id, ...pokemon };
        this.pokemons.push(newMon);
        return newMon;
    }

    deleteMon(id: number) {
        this.pokemons = this.pokemons.filter((mon) => mon.id !== id);
        return id;
    }
}
