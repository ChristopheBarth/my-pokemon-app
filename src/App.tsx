import "./App.css";
import PokemonCard from "./components/PokemonCard";


  {/* Ici on déplacé le tableau pokemonList du composant PokemonCard vers App.tsx */}
  function App() {
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
  
    }
  ]
  

  return (
    <div>
      {/* Ici on a crée une prop appelée pokemon et on lui attribue un Pokémon du tableau pokemonList */}
      <PokemonCard pokemon={pokemonList[0]} />

    </div>
  );
}


  export default App; 