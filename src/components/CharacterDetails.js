/* eslint-disable default-case */
import {Link} from 'react-router-dom';
import defaultImg from '../images/harry-placeholder.jpg';
import '../styles/components/Details.scss';

function CharacterDetails (props) {
    
    const isAlive = () => {
        if (props.character.alive && props.character.gender === 'female') {
            return 'Viva';
        } else if (props.character.alive && props.character.gender === 'male') {
            return 'Vivo';
        } else if (props.character.alive === false && props.character.gender === 'male') {
            return 'Muerto';
        } else if (props.character.alive === false && props.character.gender === 'female') {
            return 'Muerta';
    }
}
    const getGender = () => {
        return props.character.gender === 'female'? 'Mujer': 'Hombre'
    }

    const getSpecies = () => {
        switch (props.character.species) {
            case 'human':
                return 'Humano/a';
            case 'werewolf':
                return 'Licántropo';
            case 'half-giant':
                return 'Medio gigante';
            case 'ghost':
                return 'Espectro';
        }
    }
    return(
        <>
        <div className='details'>
            <ul className='details__list'>
                <li className='details__item'>
                    <img className='details__photo' alt={`Foto de ${props.character.name}`} title={props.character.name} src={props.character.image || defaultImg} />
                    <h3>{props.character.name}</h3>
                    <p className='details__data'>Estatus: {isAlive()}</p>
                    <p className='details__data'>Especie: {getSpecies()}</p>
                    <p className='details__data'>Género: {getGender()}</p>
                    <p className='details__data'>Casa: {props.character.house}</p>
                </li>
            </ul>
        </div>
    <Link to='/'><i class="fa-solid fa-hand-point-left"> Volver</i></Link>
    </>
    )
};

export default CharacterDetails;