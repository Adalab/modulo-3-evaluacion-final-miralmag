
import CharacterCard from './CharacterCard';

function CharacterList (props) {
    const htmlCharacters = props.characters.map((character) => {
        return <CharacterCard character={character}/>

    })

    return (
        <ul className="characters">
            {htmlCharacters}
        </ul>
    );
};


export default CharacterList;