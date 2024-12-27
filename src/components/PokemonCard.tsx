function PokemonCard({ pokemon }) {
  {/* ajoute un paramètre props à la fonction PokemonCard */}
 

  return (
    <>
      <figure>
          
         
          {/* <img src={pokemon.imgSrc} alt={pokemon.name}></img> */}
          <img src={pokemon.imgSrc}></img>

        <figcaption>
 
          <h2>{pokemon.name}</h2>
                
        </figcaption>

        {/* utilisation ici d'un ternaire pour vérifier si Mew à une image */}
        {pokemon.imgSrc ? <img src= {pokemon.name}></img> : <p>???</p>}
        
      </figure>
    </>
  )
}

export default PokemonCard;



