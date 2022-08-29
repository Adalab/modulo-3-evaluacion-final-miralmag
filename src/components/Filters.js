import '../styles/components/Filters.scss';
import PropTypes, { func, string } from 'prop-types';

function Filters (props) {

    const handleForm = (ev) => {
        ev.preventDefault(); //preventDefault en el onSubmit del form para evitar que se envíe el formulario al pulsar Enter
    }
    const handleFilterName = (ev) => {
        props.handleFilterName(ev.target.value);
    }

    const handleFilterHouse = (ev) => {
        props.handleFilterHouse(ev.target.value);
    }

    const handleFilterGender = (ev) => {
        props.handleFilterGender(ev.target.value);
    }

    const handleClick = (ev) => {
        ev.preventDefault();
        props.handleClick();
    }

    // const handleSort = (ev) => {
    //     ev.preventDefault();
    //     props.handleSort();
    // }

    return (
        <>
        <form className="form" onSubmit={handleForm}>

            <section className='form__wrapper'>

                <label className="form__label" htmlFor="name">Busca por nombre:</label>
                <input className="form__input" type="text" name="name" id="name" placeholder='P. ej., Harry Potter' value={props.searchName} onChange={handleFilterName}></input>
                </section>

            <section className='form__wrapper'>
                <label className="form__label" htmlFor= "house">Busca por casa:</label>
                <select
                    className= "form__input"
                    name=" house"
                    id="house"
                    value={props.searchHouse}
                    onChange={handleFilterHouse}>

                        <option value= "Gryffindor" selected>Gryffindor</option>
                        <option value="Hufflepuff">Hufflepuff</option>
                        <option value="Ravenclaw">Ravenclaw</option>
                        <option value="Slytherin">Slytherin</option>
                        <option value="all">Todos</option>
                </select>
            </section>
            <section className='form__wrapper'>
                <label className="form__label" htmlFor= "house">Busca por género:</label>
                <select
                    className= "form__input"
                    name=" gender"
                    id="gender"
                    value={props.searchGender}
                    onChange={handleFilterGender}>

                        <option value= "all" selected>Todos</option>
                        <option value="female">Femenino</option>
                        <option value="male">Masculino</option>

                </select>
            </section>
            <button className='form__button' onClick={handleClick}>Borrar</button>
            {/* <button className='form__button' onClick={handleSort}>Ordenar</button> */}
        </form>

        </>
    );
};

Filters.propTypes = {
    handleFilterName: func,
    handleFilterHouse: func,
    handleClick: func,
    handleFilterGender: func,
    searchName: string,
    searchGender: string,
    searchHouse: string,
}

export default Filters;