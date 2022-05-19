import { all, fork } from "redux-saga/effects";
import { getAllPokemonsSaga } from "./pokemon.saga";
import { pokemonInfoSaga } from "./pokemonInfo.saga";
import { PokemonApi } from "../../services";

export const PokemonSaga = function* root(
  api: PokemonApi
) {
  yield all([
    fork(getAllPokemonsSaga, api),
    fork(pokemonInfoSaga, api)
  ]);
};
