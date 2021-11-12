import React, {useEffect} from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Landing from './containers/Pages/Landing';
import Pokemon from './containers/Pages/Pokemon';
import styles from './Layout.module.css';
import { getPokemonsRequestAction } from './actions/pokemonActions';

export default () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemonsRequestAction())
  },[])

  return (
      <div className={styles.Layout}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/pokemon/:id/:name" component={Pokemon} />
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}