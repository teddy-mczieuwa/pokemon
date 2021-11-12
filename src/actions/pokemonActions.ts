import { BaseAction } from ".";

export const PokemonActionIds = {
    GET_POKEMONS_REQUEST: "GET_POKEMONS_REQUEST",
    GET_POKEMONS_SUCCESS: "GET_POKEMONS_SUCCESS",
    GET_POKEMONS_FAILURE: "GET_POKEMONS_FAILURE",
    GET_POKEMONS_PENDING: "GET_POKEMONS_PENDING",
    GET_MORE_POKEMONS_REQUEST: "GET_MORE_POKEMONS_REQUEST",
    GET_MORE_POKEMONS_SUCCESS: "GET_MORE_MORE_POKEMONS_SUCCESS",
    GET_MORE_POKEMONS_BY_NUMBER: "GET_MORE_MORE_POKEMONS_BY_NUMBER",
    GET_MORE_POKEMONS_FAILURE: "GET_MORE_POKEMONS_FAILURE",
    GET_MORE_POKEMONS_PENDING: "GET_MORE_POKEMONS_PENDING",
};

export const getPokemonsRequestAction: () => BaseAction = () => ({
    type: PokemonActionIds.GET_POKEMONS_REQUEST,
    payload: null,
});

export const getMorePokemonsRequestAction: (
    nextPage:string, 
    current: number, 
    offset?: number, 
    pageIndex?:boolean) => BaseAction = (
    nextPage, 
    current, 
    offset=0, 
    pageIndex=false) => ({
    type: PokemonActionIds.GET_MORE_POKEMONS_REQUEST,
    payload: {nextPage, current, offset, pageIndex},
});

export const getPokemonsSuccessAction: (
    count: number, 
    next: string, 
    current: number, 
    previous: string, 
    results: []) => BaseAction = (
    count, 
    next, 
    current, 
    previous, 
    results) => ({
    type: PokemonActionIds.GET_POKEMONS_SUCCESS,
    payload: {count, next, current, previous, results}
})

export const getMorePokemonsSuccessAction: (
    count: number, 
    next: string, 
    current: number, 
    previous: string, 
    results: []) => BaseAction = (
    count, 
    next, 
    current, 
    previous, 
    results) => ({
    type: PokemonActionIds.GET_MORE_POKEMONS_SUCCESS,
    payload: {count, next, current, previous, results}
})

export const getPokemonsPendingAction: () => BaseAction = () => ({
    type: PokemonActionIds.GET_POKEMONS_PENDING,
    payload: null
})

export const getMorePokemonsPendingAction: () => BaseAction = () => ({
    type: PokemonActionIds.GET_MORE_POKEMONS_PENDING,
    payload: null
})

export const getPokemonsFailureAction: () => BaseAction = () => ({
    type: PokemonActionIds.GET_POKEMONS_FAILURE,
    payload: null
})

export const getMorePokemonsFailureAction: () => BaseAction = () => ({
    type: PokemonActionIds.GET_MORE_POKEMONS_FAILURE,
    payload: null
})


