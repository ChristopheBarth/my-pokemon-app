const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];



function PokemonCard() {
  const pokemon= pokemonList[0]; {/* [1] */} 
  return (
    <>
      <figure>
           {pokemon.imgSrc ?  <img src={pokemon.imgSrc}></img> : <p>???</p>}
           {/* utilisation ici d'un ternaire pour vérifier si Mew à une image */} 
        <figcaption>

          <h2>{pokemon.name}</h2> 
        
        </figcaption>

      </figure>
    </>
  )
}

export default PokemonCard;
