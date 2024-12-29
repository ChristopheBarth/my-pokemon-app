function PokemonCard({ pokemon }) {
  {/* ajoute un paramètre props à la fonction PokemonCard */}
  console.log(pokemon);
 

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



