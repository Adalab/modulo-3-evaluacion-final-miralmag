import defaultImg from '../images/harry-placeholder.jpg';

function CharacterCard (props) {
    return (
    <li className="characters__item" id="">
        <img className="characters__img" alt={`Foto de ${props.character.name}`} src={props.character.image || defaultImg} />
        <h3 className="characters__name">{props.character.name}</h3>
        <p className="characters__species">{props.character.species}</p>
    </li>);
};

export default CharacterCard;