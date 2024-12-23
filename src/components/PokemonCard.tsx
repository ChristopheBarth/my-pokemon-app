function PokemonCard(props) {

    return (
        <>
        <figure>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></img>
        

        <figcaption>
            <h2 className={pokemon.name}>bulbasaur</h2>
            <h2 className={pokemon.name}>mew</h2>
        </figcaption>

        {/* utilisation d'un ternaire pour vérifier si notre premier pokemon a une photo */}
        {PokemonCard.imgSrc ? <img src= {pokemon.name}/> : <p>???</p>}

        </figure>
        </>
    )
}

const pokemon = { name: "mew", imgSrc: null };

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  }
];

export default PokemonCard;