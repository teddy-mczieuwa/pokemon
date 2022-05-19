import { PokemonActionIds } from "../actions/pokemonActions";
import {BaseAction} from "../actions";

export enum PokemonsActionStatus {
    Initial = "Initial",
    IsPending = "IsPending",
    Success = "ActionSucceeded",
    Failed = "ActionFailed",
}

export interface PokemonsState {
    status: PokemonsActionStatus;
    count: number;
    next: string;
    current: number;
    previous: string;
    results: Object[];
}

const initialState: PokemonsState = {
    status: PokemonsActionStatus.Initial,
    count: 0,
    next: '',
    current: 0,
    previous: '',
    results: []
}

export function pokemonsReducer (state: PokemonsState = initialState, action: BaseAction): PokemonsState {
   switch (action.type) {
        case PokemonActionIds.GET_POKEMONS_SUCCESS:
            return {...state, 
                status: PokemonsActionStatus.Success, 
                count: action.payload.count, 
                next: action.payload.next, 
                current: 1,
                previous: action.payload.previous, 
                results: action.payload.results}
        case PokemonActionIds.GET_POKEMONS_PENDING:
            return {...state, status: PokemonsActionStatus.IsPending}
        case PokemonActionIds.GET_POKEMONS_FAILURE:
            return {...state, status: PokemonsActionStatus.Failed}
        case PokemonActionIds.GET_MORE_POKEMONS_PENDING:
            return {...state, status: PokemonsActionStatus.IsPending}
        case PokemonActionIds.GET_MORE_POKEMONS_SUCCESS:
            return {...state, 
                status: PokemonsActionStatus.Success, 
                next: action.payload.next, 
                current: action.payload.current,
                previous: action.payload.previous, 
                results: action.payload.results}
        case PokemonActionIds.GET_MORE_POKEMONS_FAILURE:
            return {...state, status: PokemonsActionStatus.Failed}
        default:
           return state;
   }
}
