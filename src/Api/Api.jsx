export const fetchApi = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=200`)
        .then(res => res.json())
        .then(res => res)
} 