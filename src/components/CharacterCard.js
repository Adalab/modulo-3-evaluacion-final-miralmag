import { Link } from 'react-router-dom';
import '../styles/components/CharacterList.scss';
import defaultImg from '../images/harry-placeholder.jpg';

function CharacterCard (props) {

    return (
    <li className="characters__item" >
        <Link to={`/character/${props.character.id}`}>
        <div className='characters__img-container'>
            <img className="characters__img" alt={`Foto de ${props.character.name}`} src={props.character.image || defaultImg} />
        </div>
        <div className='characters__text'>
        <h3 className="characters__name">{props.character.name}</h3>
        <p className="characters__species">{props.character.species}</p>
        </div>
        </Link>
    </li>);
};

export default CharacterCard;