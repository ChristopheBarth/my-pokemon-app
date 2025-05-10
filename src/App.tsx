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
    {/* Ici dans le composant App, on a crée un state pokemonIndex en utilisant un état (useState). Initialise ce state à 0.*/}

    {/* Dans le composant App, ajoute deux boutons, l'un avec le texte "Précédent" et l'autre avec le texte "Suivant" */}
    const handleClickNext = () => {
      setPokemonIndex(pokemonIndex + 1);
    };
    const handleClickPrevious = () => {
      setPokemonIndex(pokemonIndex - 1);
    };
  

  return (
    <div>
      {/* Ici on a crée une prop appelée pokemon et on lui attribue un Pokémon du tableau pokemonList */}
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      
      {/* Ici on a ajouté des boutons pour changer la valeur de pokemonIndex*/}
      {/* Ici la valeur de pokemonIndex est affichée et mise à jour dynamiquement à chaque changement*/}
      {/* Affiche le bouton "Précédent" uniquement s'il y a un précédent */}
      {pokemonIndex > 0 ? (
        <button type="button" onClick={handleClickPrevious}>
          précédent
        </button>
      ) : (
        <p> </p>
      )}

      {/* Affiche le bouton "Suivant" uniquement s'il y a un suivant */}
      {pokemonIndex < pokemonList.length - 1 ? (
        <button type="button" onClick={handleClickNext}>
          suivant
        </button>
      ) : (
        <p> </p>
      )}

    </div>
  );
}


  export default App; 