import defaultImg from '../images/harry-placeholder.jpg';

function CharacterList (props) {
    const htmlCharacters = props.characters.map((character) => {
        return (<li className="characters__item" id="">
        <img className="characters__img" alt={`Foto de ${character.name}`} src={character.image || defaultImg} />
        <h2 className="characters__name">{character.name}</h2>
        <p className="characters__species">{character.species}</p>
</li>)

    })

    return (
        <ul className="characters">
            {htmlCharacters}
        </ul>
    );
};


export default CharacterList;