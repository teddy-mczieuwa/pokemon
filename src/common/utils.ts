import {split, compose, last, dropLast, filter, map, head, prop, pipe} from 'ramda'

const findEnglishSpeciesName = (species: any) => species.language.name === 'en'
const getSpeciesArr:any = filter(findEnglishSpeciesName)
const getGenusArr = compose(head,map(prop("genus")))
const allMoves = compose(map(prop("move")))

export const getPokemonId:any = compose(last,split('/'),dropLast(1))
export const getGenus:any = compose(getGenusArr, getSpeciesArr)
export const getMoves:any = compose(map(prop("name"), allMoves))