const fetchAllPokemons = async (offset: number = 0, limit: number = 16): Promise<any> => {
    try {
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`, { method: "GET" });

        if(!response || response.status > 400) {
            throw new Error('There was an internal error while fetching all pokemons')
        } else if (response.status === 200) {
            const result = await response.json();
            return Promise.resolve(result)
        } else {
            throw new Error('Unknown response status from fetchAllPokemons')
        }
        
    } catch (error) {
        return Promise.reject(error);
    }
} 

const fetchMorePokemons = async (url:string):Promise<any> => {
    try {
        const response: Response = await fetch(url, { method: "GET" });

        if(!response || response.status > 400) {
            throw new Error('There was an internal error while fetching more pokemons')
        } else if (response.status === 200) {
            const result = await response.json();
            return Promise.resolve(result)
        } else {
            throw new Error('Unknown response status from fetchAllPokemons')
        }
        
    } catch (error) {
        return Promise.reject(error);
    }
} 

const getSpecies = async (id: number): Promise<any> => {
    try {
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`,{ method: "GET" })
        
        if(!response || response.status > 400) {
            throw new Error('There was an internal error while fetching all pokemons')
        } else if (response.status === 200) {
            const result = await response.json();
            return Promise.resolve(result)
        } else {
            throw new Error('Unknown response status from fetchAllPokemons')
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

const fetchPokemonInfo = async (name: string): Promise<any> => {
    try {
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`,{ method: "GET" })
        
        if(!response || response.status > 400) {
            throw new Error('There was an internal error while fetching all pokemons')
        } else if (response.status === 200) {
            const result = await response.json();
            return Promise.resolve(result)
        } else {
            throw new Error('Unknown response status from fetchAllPokemons')
        }
    } catch (error) {
        return Promise.reject(error)
    }
}

export const PokemonService = {fetchAllPokemons, fetchMorePokemons, fetchPokemonInfo, getSpecies}

export interface PokemonApi {
    pokemon: typeof PokemonService
}

const api: PokemonApi = {pokemon: PokemonService}

export default api