

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

    return (
        <form className="form" onSubmit={handleForm}>
            <>
        <label className="form__label display-block" htmlFor="name">Busca por nombre:</label>
        <input className="form__input-text" type="text" name="name" id="name" value={props.searchName} onChange={handleFilterName}></input>
        </>

        <label className="form__label display-block" htmlFor= "house">Busca por casa:</label>
            <select
                className= "form__input-text"
                name=" house" 
                id="house"
                value={props.searchHouse}
                onChange={handleFilterHouse}>
        
                    <option value= "Gryffindor" selected>Gryffindor</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Slytherin">Slytherin</option>
            </select>
        </form>
    );
};

export default Filters;