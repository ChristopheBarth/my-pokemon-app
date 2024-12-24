interface PokemonProps {
  name: string;
  imgSrc?: string;

}

function Pokemon({ name, imgSrc }: PokemonProps) {
  return (
    <p>
      My pokemon is {name} 
      {imgSrc != null && `, and my ${imgSrc}.`}
    </p>
  );
}

//import { useState } from "react";

function App() {
  return (
    <>
      <figure>
            {/* <img src={pokemon.imgSrc} alt={pokemon.name} /> */}
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"></img>

        <figcaption>

          <h2 className={Pokemon.name}>bulbasaur</h2> 
          <h2 className={Pokemon.name}>mew</h2>
        
        </figcaption>

        {/* Utilisation d'un ternaire pour vérifier si notre premier Pokemon a une photo */}
        {Pokemon.imgSrc ? <img src= {Pokemon.name}/> : <p>???</p>}

      </figure>
    </>
  )
}

export default App;
