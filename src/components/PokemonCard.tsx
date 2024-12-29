function PokemonCard() {
{/* Dans le fichier PokemonCard.tsx, crée un composant React appelé PokemonCard. Ce composant doit contenir une balise <figure>.*/}
    return (
        <>
        <figure>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur"></img>
             {/* ajout de ma balise <img> qui représente bulbasaur */}

        </figure>
        
        <figcaption>
            <h2>bulbasaur</h2>
            {/* ajout de ma balise <figcaption> qui représente le nom du Pokemon affiché sous l'image */}
        </figcaption>

        </>
    )
};

export default PokemonCard;