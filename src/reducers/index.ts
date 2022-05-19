import { combineReducers } from "redux";
import { pokemonsReducer, PokemonsState } from "./pokemonReducer";
import { pokemonInfoReducer, PokemonInfoState } from "./pokemonInfoReducer";


export interface AppState {
  pokemonsState: PokemonsState;
  pokemonInfoState: PokemonInfoState;
}
  
export const reducers = combineReducers<AppState>({
  pokemonsState: pokemonsReducer,
  pokemonInfoState: pokemonInfoReducer,
});