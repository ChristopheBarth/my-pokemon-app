function PokemonCard ( Pokemon ) {
//function PokemonProps {

interface Pokemon {
  name: "string";
  imgSrc?: "string";

}

    
    
    
     

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

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
      
    }
  ];

  // interface PokemonProps {
  //   name: string;
  //   imgSrc: string;
  // }

  //   function Pokemon({ name, imgSrc }: PokemonProps) {
  //     return (
  //       <p>
  //         Hello, my name is {name}, and my photo is {imgSrc}.
  //       </p>
  //     );      
  //   }

  //   function App() {
  //     return <Pokemon name="bulbasaur" imgSrc={{ Pokemon }} />;
  //   }
  
    export default PokemonCard;

// export default App;