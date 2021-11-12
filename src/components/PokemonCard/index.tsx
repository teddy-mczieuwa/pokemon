import React, {FC, memo} from 'react';
import {Link} from 'react-router-dom'
import styles from './PokemonCard.module.css'
import Image from '../Image'
import { PokemonCardProps } from './interface';
import { getPokemonId } from '../../common/utils';

const PokemonCard:FC<PokemonCardProps> = ({name, url}) => {
    const id = getPokemonId(url)
    return (
        <Link to={`/pokemon/${id}/${name}`} className={`${styles["PokemonCard"]}`}>
            <Image id={id} name={name}/>
            <div className={`${styles["PokemonCard__text"]}`}>
                <p>{name}</p>
            </div>
        </Link>
    )
}

export default memo(PokemonCard)
