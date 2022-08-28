
import CharacterCard from './CharacterCard';

function CharacterList (props) {
    const htmlCharacters = props.filteredCharacters.map((character, index) => {
        return <CharacterCard key={index} character={character} />

    })

    const getErrorMsg = () => {
        if (htmlCharacters.length === 0) {
            return 'No hay ningún personaje con ese nombre'
        }
    }
    return (
        <>
        <ul className="characters">
            {htmlCharacters}
        </ul>
        <p>{getErrorMsg()}</p>
        </>
    );
};


export default CharacterList;