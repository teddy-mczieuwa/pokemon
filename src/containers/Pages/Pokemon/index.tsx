import React, {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Image from '../../../components/Image';
import styles from './Pokemon.module.css';
import { getPokemonInfoRequestAction } from '../../../actions/pokemonInfoActions';
import MovesList from '../../../components/MovesList';
import StatsTable from '../../../components/StatsTable';
import Bio from '../../../components/Bio';

const Pokemon:FC = () => {
    const dispatch = useDispatch();
    const pokemonInfo = useSelector((state:any) => state.pokemonInfoState);
    const isPending:boolean = pokemonInfo.status === "IsPending";
    let params:any = useParams();
    
    useEffect(() => {
        dispatch(getPokemonInfoRequestAction(params.name, params.id));
    }, []);

    return (
    <div className={`${styles["Pokemon"]}`}>
        <Image id={params.id} name={params.name} />
        <Bio name={params.name} species={pokemonInfo.species} weight={pokemonInfo.weight} types={pokemonInfo.pokemonTypes} isPending={isPending} />

        <div className={`${styles["Pokemon__description"]}`}>
            <StatsTable stats={pokemonInfo.stats} isPending={isPending} />
            <MovesList isPending={isPending} moves={pokemonInfo.moves} />
        </div>
    </div>
    )
}

export default Pokemon 
