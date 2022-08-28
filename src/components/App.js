
import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import getDataApi from '../services/hpApi';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Logo from '../images/logo.png';
import '../styles/App.scss';
import CharacterDetails from './CharacterDetails';
import localStorage from '../services/localStorage';

function App() {

  //Variables estado
  const [characters, setCharacters] = useState(localStorage.get('characters', []))
  const [searchName, setSearchName] = useState (localStorage.get('search', ''));
  const [searchHouse, setSearchHouse] = useState('Gryffindor');

  //Servicios
  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
      localStorage.set('characters', data);
      console.log(characters);
    });
  }, []);

  //Funciones de eventos
  const handleFilterName = (inputName) => {
    setSearchName(inputName);
    localStorage.set('search', inputName);
  }

  const handleFilterHouse = (inputHouse) => {
    setSearchHouse(inputHouse);
  }

  //Filtrado
  const filteredCharacters = characters
  .filter((character) => {
    return character.name.toLowerCase().includes(searchName.toLowerCase())
  })
  .filter((character) => {
    return searchHouse === character.house;
  })
 

  //Obtener id para ruta dinámica
  const {pathname} = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  const characterFound = characters.find(character => {return character.id === characterId});

  return (
    <div>
      <header className='header'>
      <img className='header__logo' alt='Harry Potter' src={Logo} />
      </header>

      <Routes>
        <Route
        path='/'
        element={
        <>
          <Filters 
          handleFilterName={handleFilterName} 
          searchName={searchName} 
          handleFilterHouse={handleFilterHouse} 
          searchHouse={searchHouse} />

          <CharacterList 
          filteredCharacters={filteredCharacters} />
          </>}
        />

        <Route
        path='/character/:id'
        element={
          <CharacterDetails character={characterFound} />
        }
        />
      </Routes>
      
    </div>
  );
}

export default App;
