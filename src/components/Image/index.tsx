import React,{FC} from 'react';
import {ImageProps} from './interface';
import styles from './Image.module.css';

const Image:FC<ImageProps> = ({id, name}) => {
    return (
        <img
            className={styles.Image}
            loading="lazy"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
        />
    )
}

export default Image

