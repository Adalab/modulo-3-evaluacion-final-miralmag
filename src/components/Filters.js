import '../styles/components/Filters.scss';

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

    const handleClick = (ev) => {
        ev.preventDefault();
        props.handleClick();
    }

    return (
        <>
        <form className="form" onSubmit={handleForm}>
            <section className='form__wrapper'>
        <label className="form__label" htmlFor="name">Busca por nombre:</label>
        <input className="form__input" type="text" name="name" id="name" value={props.searchName} onChange={handleFilterName}></input>
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
            <button className='form__button' onClick={handleClick}>Ordenar</button>
        </form>
       
        </>
    );
};

export default Filters;