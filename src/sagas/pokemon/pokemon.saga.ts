import { call, put, takeLatest, takeEvery, ForkEffect } from "redux-saga/effects";
import { BaseAction } from "../../actions";
import { PokemonApi } from "../../services";
import { 
  PokemonActionIds, 
  getPokemonsFailureAction, 
  getPokemonsPendingAction, 
  getPokemonsSuccessAction,
  getMorePokemonsPendingAction,
  getMorePokemonsSuccessAction,
  getMorePokemonsFailureAction
} from "../../actions/pokemonActions";

type Response = {
  count: number;
  next: string;
  previous: string;
  results:[]
}

export function* getAllPokemonsSaga(
    api: PokemonApi
  ): Generator<ForkEffect<never>> {
    yield takeLatest(PokemonActionIds.GET_POKEMONS_REQUEST, () => getPokemons(api));
    yield takeEvery(PokemonActionIds.GET_MORE_POKEMONS_REQUEST, (action) => getMorePokemons(api, action));
}

function* getPokemons(api:PokemonApi) {
  yield put(getPokemonsPendingAction())
  try {
    const {count, next, current, previous, results} = yield call(() => api.pokemon.fetchAllPokemons())
    yield put(getPokemonsSuccessAction(count, next, current, previous, results))
  } catch (error) {
    yield put(getPokemonsFailureAction())
  }
}

function* getMorePokemons(api:PokemonApi, action: BaseAction) {
  const {offset, nextPage, current} = action.payload
  yield put(getMorePokemonsPendingAction())

  let response: Response;
  try {
    if(action.payload.pageIndex) {
      response = yield call(() => api.pokemon.fetchAllPokemons(offset))
    } else {
      response = yield call(() => api.pokemon.fetchMorePokemons(nextPage))
    }
    yield put(getMorePokemonsSuccessAction(response.count, response.next, current, response.previous, response.results))

  } catch (error) {
    console.log(error)
    yield put(getMorePokemonsFailureAction())
  }
}
