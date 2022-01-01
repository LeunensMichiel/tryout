import { Controller, Get, Param } from '@nestjs/common';
import { PokemonDto } from '../dto/pokemon.dto';
import { PokemonService } from '../services';

@Controller('pokemons')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    findAll(): PokemonDto[] {
        return this.pokemonService.findAll();
    }
}
