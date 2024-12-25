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



function PokemonCard ( pokemon ) {
  {/* ajoute un paramètre props à la fonction PokemonCard */}
 
  
  {/* const pokemon= pokemonList[1] ici on a remplacé mon tableau pokemonList pour ne pas casser l'affichage par */} 
  {/* const pokemon = { name: "mew", imgSrc: null }; on a supprimé cette ligne */}
  return (
    <>
      <figure>
           {/* utilisation ici d'un ternaire pour vérifier si Mew à une image */}
           {pokemon.imgSrc ? <img src= {pokemon.imgSrc}></img> : <p>???</p>}
           <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></img>
            
        <figcaption>

          {/* <h2>{pokemon.name}</h2>  */}
          <h2 className={pokemon.name}>bulbasaur</h2>
          <h2 className={pokemon.name}>mew</h2>
        
        </figcaption>

      </figure>
    </>
  )
}

export default PokemonCard;
