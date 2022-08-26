
import CharacterCard from './CharacterCard';

function CharacterList (props) {
    const htmlCharacters = props.filteredCharacters.map((character) => {
        return <CharacterCard character={character}/>

    })

    return (
        <ul className="characters">
            {htmlCharacters}
        </ul>
    );
};


export default CharacterList;