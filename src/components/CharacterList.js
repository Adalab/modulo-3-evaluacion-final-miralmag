
import CharacterCard from './CharacterCard';

function CharacterList (props) {
    const htmlCharacters = props.filteredCharacters.map((character, index) => {
        return <CharacterCard key={index} character={character}/>

    })

    return (
        <ul className="characters">
            {htmlCharacters}
        </ul>
    );
};


export default CharacterList;