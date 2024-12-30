import "./App.css";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";



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
    {/* Ici on a utilisé une alerte au démarrage avec le hook useEffect */}
    useEffect(() => {
      alert("hello pokemon trainer :)");
    },[]);
    {/* Ici on a utilisé une deuxième alerte pour pikachu mais sans le useEffect */}
    if (pokemonIndex === 3) { alert("pika pikachu !!!");
    }

  

  return (
    <div>

      <nav>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonList={pokemonList} />
      {/* Ici on a envoyé les valeurs à NavBar  */}
      </nav>
      
      <section>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      </section>
      {/* Et enfin on a supprimé nos boutons ici dans App vu qu'ils sont fonctionnels dans NavBar.tsx */}
    </div>
  );
}

  export default App; 