function CharacterList (props) {
    const htmlCharacters = props.characters.map((character) => {
        return (<li className="" id="">
        <img alt={`Foto de ${character.name}`} src={character.image} />
        <h2 className="">{character.name}</h2>
        <p>{character.species}</p>
</li>)

    })
    return (
        <ul className="">
            {htmlCharacters}
        </ul>
    );
};

export default CharacterList;