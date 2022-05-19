import { PokemonInfoActionIds } from "../actions/pokemonInfoActions";
import { PokemonsActionStatus } from "./pokemonReducer";
import {BaseAction} from "../actions";

export interface PokemonInfoState {
    status: PokemonsActionStatus;
    weight: number;
    stats: [];
    species: string;
    pokemonTypes: string[];
    moves: string[];
}

const initialState: PokemonInfoState = {
    status: PokemonsActionStatus.Initial,
    weight: 0,
    stats: [],
    species: '',
    pokemonTypes: [],
    moves: []
}

export function pokemonInfoReducer (state: PokemonInfoState = initialState, action: BaseAction): PokemonInfoState {
    switch (action.type) {
         case PokemonInfoActionIds.GET_POKEMON_INFO_SUCCESS:
             return {...state, 
                 status: PokemonsActionStatus.Success, 
                 weight: action.payload.weight, 
                 stats: action.payload.stats, 
                 species: action.payload.species,
                 pokemonTypes: action.payload.pokemonTypes, 
                 moves: action.payload.moves}
         case PokemonInfoActionIds.GET_POKEMON_INFO_PENDING:
             return {...state, status: PokemonsActionStatus.IsPending}
         case PokemonInfoActionIds.GET_POKEMON_INFO_FAILURE:
             return {...state, status: PokemonsActionStatus.Failed}
         default:
            return state;
    }
}
