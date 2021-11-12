import React,{FC} from 'react';
import {MovesListProps} from './interface';
import styles from './MovesList.module.css';

const MovesList:FC<MovesListProps> = ({moves, isPending}) => {
    const renderMoves = () => moves.map((move:string, index:number) => <li key={index}>{move}</li>);

    return (
        <div className={styles.MovesList}>
            <h2>Moves</h2>
            <ol>
                {isPending ? <p>Loading...</p> : renderMoves()}
            </ol>
        </div>
    );
}

export default MovesList;