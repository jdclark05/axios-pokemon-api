export async function GetPokemon(url) {
    useEffect(() => {
        axios.get(initialUrl)
        .then(response => {setPokemonData(response.data)}) 
    }, []);
}