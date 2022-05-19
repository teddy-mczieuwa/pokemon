import React,{FC} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PokemonsState } from '../../reducers/pokemonReducer';
import {PaginationProps} from './interface'
import {getMorePokemonsRequestAction} from '../../actions/pokemonActions'
import styles from './Pagination.module.css'

const Pagination:FC<PaginationProps> = ({limit, current}) => {
    const dispatch = useDispatch()
    const pokemons:PokemonsState = useSelector((state:any) => state.pokemonsState)
    const pageCount:number = Math.ceil(pokemons.count / limit)

    const renderPaginationNumbers = (pageCount: number) => {
        return Array.from({length: pageCount}, (page, index) => {
            let currentIndex = index+1
            page = (
                <span 
                    onClick={() => dispatch(getMorePokemonsRequestAction(pokemons.previous, currentIndex, limit*index, true))}
                    className={current === currentIndex ? styles.active : `${styles["Pagination__page"]}`} 
                    key={index}>
                    {currentIndex}
                </span>
            )

            return page

        })
    }

    return (
        <div className={`${styles["Pagination"]}`}>
            <span className={`${styles["Pagination__previous"]}`} onClick={() => dispatch(getMorePokemonsRequestAction(pokemons.previous, pokemons.current-1))}> 
                Previous
            </span>

            {renderPaginationNumbers(pageCount)}

            <span className={`${styles["Pagination__next"]}`} onClick={() => dispatch(getMorePokemonsRequestAction(pokemons.next, pokemons.current+1))}>
                Next
            </span>
        </div>
    )
}

export default Pagination
