interface PokemonCardProps {
  pokemon: {
    name: string;
    imgSrc?: string;
  }
}


function PokemonCard({ pokemon }: PokemonCardProps) {
  {/* Ici on a ajouté un paramètre props à la fonction PokemonCard */}


 

  return (
    <>
      <figure>

         {/* utilisation ici d'un ternaire pour vérifier si Mew à une image */}
         {pokemon.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon.name}></img> : <p>???</p>}

      </figure>

      <figcaption>
 
          <h2>{pokemon.name}</h2>
                
      </figcaption>

    </>
  )
}

export default PokemonCard;



