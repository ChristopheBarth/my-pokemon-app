import "./App.css";
import PokemonCard from "./components/PokemonCard";



function App() {
  const pokemon = { name: "mew", imgSrc: null };
  return (
    <div>
      {/* <PokemonCard pokemon={pokemon.name} /> */}
      <PokemonCard key={pokemon.name} />
    </div>
  );
}

export default App;