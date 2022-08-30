import PropTypes, { array } from 'prop-types';

import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

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
        <p className='characters__error'>{getErrorMsg()}</p>
        </>
    );
};

CharacterList.propTypes = {
    filteredCharacters: array,
}

export default CharacterList;