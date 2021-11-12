import { BaseAction } from ".";

export const PokemonInfoActionIds = {
    GET_POKEMON_INFO_REQUEST: "GET_POKEMON_INFO_REQUEST",
    GET_POKEMON_INFO_SUCCESS: "GET_POKEMON_INFO_SUCCESS",
    GET_POKEMON_INFO_FAILURE: "GET_POKEMON_INFO_FAILURE",
    GET_POKEMON_INFO_PENDING: "GET_POKEMON_INFO_PENDING"
}

export const getPokemonInfoRequestAction: (name:string, id:number) => BaseAction = (name, id) => ({
    type: PokemonInfoActionIds.GET_POKEMON_INFO_REQUEST,
    payload: {name, id},
});

export const getPokemonInfoPendingAction: () => BaseAction = () => ({
    type: PokemonInfoActionIds.GET_POKEMON_INFO_PENDING,
    payload: null,
});

export const getPokemonInfoFailureAction: () => BaseAction = () => ({
    type: PokemonInfoActionIds.GET_POKEMON_INFO_FAILURE,
    payload: null,
});

export const getPokemonInfoSuccessAction: (
    weight: number,
    stats:[],
    species: string,
    pokemonTypes: string[],
    moves: string[]
) => BaseAction = (
    weight,
    stats,
    species,
    pokemonTypes,
    moves
) => ({
    type: PokemonInfoActionIds.GET_POKEMON_INFO_SUCCESS,
    payload: {weight,stats,species,pokemonTypes,moves}
});