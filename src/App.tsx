import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";


  {/* Ici on déplacé le tableau pokemonList du composant PokemonCard vers App.tsx */}
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];

  function App() {
    const [pokemonIndex, setPokemonIndex] = useState(0);
  

  

  return (
    <div>

      <nav>
      {/* Ici on ajouté notre méthode map pour parcourir pokemonList dans la partie nav */}
      {pokemonList.map((pokemon, i) => (
        <button 
        onClick={() => setPokemonIndex(i)}
        value={pokemon.name}
        key={pokemon.name}
        type="button"
        >
        {pokemon.name}
        </button>       
      ))}
      </nav>
      
      <section>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      </section>
      
    </div>
  );
}

  export default App; 