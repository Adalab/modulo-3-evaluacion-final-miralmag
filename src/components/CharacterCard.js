import { Link } from 'react-router-dom';
import '../styles/components/CharacterList.scss';
import defaultImg from '../images/harry-placeholder.jpg';

function CharacterCard (props) {
    
    const getSpecies = () => {
        // eslint-disable-next-line default-case
        switch (props.character.species) {
            case 'human':
            return 'Humano/a';
            case 'werewolf':
            return 'Licántropo';
            case 'half-giant':
            return 'Medio gigante';
            case 'ghost':
            return 'Espectro';
            case 'cat':
            return 'Gato';
            case 'goblin':
            return 'Duende';
            case 'owl':
            return 'Búho';
            case 'poltergeist':
            return 'Poltergeist';
            case 'three-headed dog':
            return 'Perro de tres cabezas';
            case 'dragon':
            return 'Dragón';
            case 'centaur':
            return 'Centauro';
            case 'house-elf':
            return 'Elfo doméstico';
            case 'hippogriff':
            return 'Hipogrifo';
            case 'acromantula':
            return 'Acromántula';
            case 'giant':
            return 'Gigante';
            case 'vampire':
            return 'Vampiro';
            case 'half-human':
            return 'Medio humano';

        }
    }

    return (
    <li className="characters__item" >
        <Link to={`/character/${props.character.id}`}>
        <div className='characters__img-container'>
            <img className="characters__img" alt={`Foto de ${props.character.name}`} src={props.character.image || defaultImg} />
        </div>
        <div className='characters__text'>
        <h3 className="characters__name">{props.character.name}</h3>
        <p className="characters__species">{getSpecies()}</p>
        </div>
        </Link>
    </li>);
};

export default CharacterCard;