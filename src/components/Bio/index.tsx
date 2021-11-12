import React, {FC} from 'react';
import {BioProps} from './interface';
import styles from './Bio.module.css';

const Bio:FC<BioProps> = ({species, weight, name, types, isPending}) => {
    const renderTypes = () => types.map((type:string): string => `${type}, `);

    return (
        <div className={styles.Bio}>
            <div>
                <h2>{isPending ? <span>loading...</span> : name}</h2>
                <p><strong>Species:</strong> {isPending ? <span>loading...</span> : species}</p>
                <p><strong>Types:</strong> {isPending ? <span>loading...</span> : renderTypes()}</p>
                <p><strong>Weight:</strong> {isPending ? <span>loading...</span> : weight}</p>
            </div>
        </div>
    )
}

export default Bio
