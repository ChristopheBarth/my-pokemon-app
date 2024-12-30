  {/* Ici on a crée un nouveau composant NavBar.tsx qui sera responsable de l'affichage des boutons de navigation */}
  
  interface Pokemon {
    name: string;
    imgSrc?: string;
  }

  interface NavBarProps {
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }
  {/* Ici on a ajouté nos props setPokemonIndex et pokemonList*/}


function NavBar( 
    { setPokemonIndex, pokemonList }: NavBarProps,
) {
  {/* Ici on a déclaré nos props setPokemonIndex et pokemonList dans notre fonction NavBar*/}

    return (
      
        <nav>
            {/* Ici on a copié nos boutons dans App.tsx pour les coller ici */}
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
        
      
    );
  }

  export default NavBar;