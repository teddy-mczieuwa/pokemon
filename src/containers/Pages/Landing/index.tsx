import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header';
import styles from './Landing.module.css';
import PokemonCard from '../../../components/PokemonCard';
import Pagination from '../../../components/Pagination';
import { PokemonsState } from '../../../reducers/pokemonReducer';

const Landing:FC = () => {
    const pokemons:PokemonsState = useSelector((state:any) => state.pokemonsState);
    const isPending:boolean = pokemons.status === 'IsPending';
    const renderCard = () => (
        pokemons.results.map((pokemon:any) => <PokemonCard name={pokemon.name} key={pokemon.url} url={pokemon.url}/>)
    );

    return (
        <>
            <Header/>
            <Pagination limit={100} current={pokemons.current} />

            <div className={`${styles["Landing__cards"]}`}>
                {isPending ? <p>Loading...</p> : renderCard()}
            </div>

            <Pagination limit={100} current={pokemons.current} />
        </>
    )
}

export default Landing;
