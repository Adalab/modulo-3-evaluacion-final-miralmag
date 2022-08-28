import { Link } from 'react-router-dom';
import defaultImg from '../images/harry-placeholder.jpg';

function CharacterCard (props) {

    return (
    <li className="characters__item" >
        <Link to={`/character/${props.character.id}`}>
        <img className="characters__img" alt={`Foto de ${props.character.name}`} src={props.character.image || defaultImg} />
        <h3 className="characters__name">{props.character.name}</h3>
        <p className="characters__species">{props.character.species}</p>
        </Link>
    </li>);
};

export default CharacterCard;