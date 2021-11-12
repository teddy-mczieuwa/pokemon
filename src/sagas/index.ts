import { Dispatch } from "redux";
import { all, fork } from "redux-saga/effects";
import { BaseAction } from "../actions";
import api from "../services"
import { PokemonSaga } from "./pokemon";

// Register all your watchers
export const rootSaga = function* root(dispatch: Dispatch<BaseAction>) {
    yield all([
      fork(PokemonSaga, api),
    ]);
  };
  