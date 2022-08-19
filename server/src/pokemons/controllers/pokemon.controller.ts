import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreatePokemonDto, PokemonDto } from '../dto/pokemon.dto';
import { PokemonService } from '../services';

@Controller('pokemons')
export class PokemonController {
    constructor(private readonly pokemonService: PokemonService) {}

    @Get()
    @ApiOperation({ summary: 'Get a list of pokemon' })
    @ApiOkResponse({ type: [PokemonDto] })
    public findAll(): PokemonDto[] {
        return this.pokemonService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a single pokemon' })
    @ApiOkResponse({ type: PokemonDto })
    public findOne(@Param('id') id: string): PokemonDto {
        const idAsNumber = Number(id);
        if (!idAsNumber) {
            throw new Error('Could not cast Pokemon ID to number');
        }
        return this.pokemonService.findOne(idAsNumber);
    }

    @Post()
    @ApiOperation({ summary: 'Create a pokemon' })
    public createMon(@Body() createMonDto: CreatePokemonDto): PokemonDto {
        return this.pokemonService.createMon(createMonDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Remove a pokemon' })
    public removeMon(@Param('id') id: string) {
        const idAsNumber = Number(id);
        if (!idAsNumber) {
            throw new Error('Could not cast Pokemon ID to number');
        }
        return this.pokemonService.deleteMon(idAsNumber);
    }
}
