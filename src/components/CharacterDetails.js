import {Link} from 'react-router-dom';

function CharacterDetails (props) {
    return(
        <>
        <div>
            <ul>
                <li>
                    <img alt='' title='' src={props.character.image} />
                    <h3>{props.character.name}</h3>
                    <p>Estatus: {props.character.alive}</p>
                    <p>Especie: {props.character.species}</p>
                    <p>Género: {props.character.gender}</p>
                    <p>Casa: {props.character.house}</p>
                </li>
            </ul>
        </div>
    <Link to='/'>Volver</Link>
    </>
    )
};

export default CharacterDetails;