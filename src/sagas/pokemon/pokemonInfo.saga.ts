import {put, call, takeLatest, ForkEffect} from 'redux-saga/effects'
import {BaseAction} from "../../actions"
import { PokemonApi } from '../../services'
import {getGenus} from '../../common/utils'
import { prop, map } from 'ramda'
import {
    PokemonInfoActionIds,
    getPokemonInfoSuccessAction, 
    getPokemonInfoFailureAction, 
    getPokemonInfoPendingAction
} from '../../actions/pokemonInfoActions'

export function* pokemonInfoSaga(api: PokemonApi):Generator<ForkEffect<never>> {
    yield takeLatest(PokemonInfoActionIds.GET_POKEMON_INFO_REQUEST, (action) => pokemonInfo(api, action))
}

function* pokemonInfo(api:PokemonApi, action: BaseAction) {
    const {name, id} = action.payload
    yield put(getPokemonInfoPendingAction())

    try {
        const {genera} = yield call(() => api.pokemon.getSpecies(id))
        const {weight, moves, stats, types} = yield call(() => api.pokemon.fetchPokemonInfo(name))
        
        const species = getGenus(genera)

        const allMoves = map(prop("move"), moves)
        const movesArr:[] = map(prop("name"), allMoves)
        
        const allTypes = map(prop("type"), types)
        const typesArr:[] = map(prop("name"), allTypes)

        yield put(getPokemonInfoSuccessAction(weight,stats,species,typesArr,movesArr))
    } catch (error) {
        put(getPokemonInfoFailureAction())
    }
}