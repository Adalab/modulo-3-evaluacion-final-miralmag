import { useEffect, useState } from 'react';
import getDataApi from '../services/hpApi';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Logo from '../images/logo.png';
import '../styles/App.scss';

function App() {

  //Variables estado
  const [characters, setCharacters] = useState([])
  const [searchName, setSearchName] = useState('');
  const [searchHouse, setSearchHouse] = useState('gryffindor');

  //Servicios
  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
      console.log(characters);
    });
  }, []);

  //Funciones de eventos
  const handleFilterName = (inputName) => {
    setSearchName(inputName);
  }

  const handleFilterHouse = (inputHouse) => {
    setSearchHouse(inputHouse);
  }

  //Filtrado
  const filteredCharacters = characters
  .filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase())
  })

  return (
    <div>
      <header className='header'>
      <img className='header__logo' src={Logo} />
      </header>

      <Filters handleFilterName={handleFilterName} searchName={searchName} handleFilterHouse={handleFilterHouse} searchHouse={searchHouse}/>

      <CharacterList filteredCharacters={filteredCharacters}/>
    </div>
  );
}

export default App;
