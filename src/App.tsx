import "./App.css";
import PokemonCard from "./components/PokemonCard";

function App() {
  {/* Ici on déplacé le tableau pokemonList du composant PokemonCard vers App */}

  // const pokemon = { name: "mew", imgSrc: null };
  // const pokemonList = [
  //   { name: "bulabasaur", imgSrc: PokemonCard},
  //   { name: "mew", imgSrc: null},
  // ]
  const pokemon = { name: "mew", imgSrc: null };

  return (
    <div>
      {/* Ici on a crée une prop appelée pokemon et on lui attribue un Pokémon du tableau pokemonList */}
      <PokemonCard pokemon={pokemon.name} />
      {/* <PokemonCard pokemon={pokemonList[0]} /> */}
    </div>
  );
}

export default App;