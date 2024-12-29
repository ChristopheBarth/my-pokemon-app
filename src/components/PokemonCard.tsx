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
  {/* À l'intérieur de la fonction PokemonCard, crée une variable appelée pokemon : affecte-lui le premier Pokémon du tableau pokemonList */}
  const pokemon= pokemonList[1]; 
  return (
    <>
      <figure>
          {/* utilisation ici d'un ternaire pour vérifier si Mew à une image */}
          {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name} /> : <p>???</p>}
        
      </figure>
            
        <figcaption>

          <h2>{pokemon.name}</h2> 
        
        </figcaption>

    </>
  )
}

export default PokemonCard;
