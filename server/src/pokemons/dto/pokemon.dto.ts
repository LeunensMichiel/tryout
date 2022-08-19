import { ApiProperty } from '@nestjs/swagger';

class PokemonBase {
    @ApiProperty()
    public HP: number;
    @ApiProperty()
    public Attack: number;
    @ApiProperty()
    public Defense: number;
    @ApiProperty()
    public 'Sp. Attack': number;
    @ApiProperty()
    public 'Sp. Defense': number;
    @ApiProperty()
    public 'Speed': number;
}

export class PokemonDto {
    @ApiProperty()
    public id: number;
    @ApiProperty()
    public name: string;
    @ApiProperty()
    public type: string[];
    @ApiProperty()
    public base: PokemonBase;
}

export class CreatePokemonDto {
    @ApiProperty()
    public name: string;
    @ApiProperty()
    public type: string[];
    @ApiProperty()
    public base: PokemonBase;
}
