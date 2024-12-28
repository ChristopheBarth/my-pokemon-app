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
    
  //   const pokemonList = ["bulbasaur", "charmander", "squirtle", "pikachu", "mew"];
  //   // const pokemonIndex = ({ pokemonList }) => {

  

  return (
    <div>
      {/* Ici on a crée une prop appelée pokemon et on lui attribue un Pokémon du tableau pokemonList */}
      {/* <PokemonCard pokemon={pokemonList[0]} />
      <PokemonCard pokemon={pokemonList[1]} />
      <PokemonCard pokemon={pokemonList[2]} />
      <PokemonCard pokemon={pokemonList[3]} />
      <PokemonCard pokemon={pokemonList[4]} /> */}
      
      <nav>
      {/* Ici on ajouté notre méthode map pour parcourir pokemonList dans la partie nav */}
      {pokemonList.map((pokemonList) => (
       <PokemonCard key={pokemonList.name} pokemon={pokemonList}/>
      ))}
      </nav>
      
    </div>
  );
}



{/* <h1>Index du Pokémon actuel : {pokemonIndex}</h1> */}
      {/* Ici on a ajouté des boutons pour changer la valeur de pokemonIndex*/}
      {/* Ici la valeur de pokemonIndex est affichée et mise à jour dynamiquement à chaque changement*/}

      {/* Affiche le bouton "Précédent" uniquement s'il y a un précédent */}
      {/* {pokemonIndex > 0 && (
        <button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>Précédent</button>
      )} */}

      {/* Affiche le bouton "Suivant" uniquement s'il y a un suivant */}
      {/* {pokemonIndex < pokemonList.length - 1 && (
        <button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>Suivant</button>
      )} */}


  export default App; 