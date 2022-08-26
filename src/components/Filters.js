

function Filters (props) {

    const handleFilterName = (ev) => {
        props.handleFilterName(ev.target.value);
    }

    return (
        <form className="form">
            <>
        <label className="form__label display-block" htmlFor="name">Busca por nombre:</label>
        <input className="form__input-text" type="text" name="name" id="name" value={props.searchName} onChange={handleFilterName}></input>
        </>

        <label className="form__label display-block" htmlFor= "house">Busca por casa:</label>
            <select
                className= "form__input-text"
                name=" house" 
                id="house">
        
                    <option value= "gryffindor" selected>Gryffindor</option>
                    <option value="hufflepuff">Hufflepuff</option>
                    <option value="ravenclaw">Ravenclaw</option>
                    <option value="slytherin">Slytherin</option>
            </select>
        </form>
    );
};

export default Filters;