
import { useEffect, useState } from 'react';
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import getDataApi from '../services/hpApi';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Header from './Header';
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
    if (searchHouse === 'all') 
      {return true} else {
        return searchHouse === character.house
      }
  })

  const handleClickSort = () => {
    
  }

  //Obtener id para ruta dinámica
  const {pathname} = useLocation();
  const dataPath = matchPath('/character/:id', pathname);
  const characterId = dataPath !== null ? dataPath.params.id : null;
  const characterFound = characters.find(character => {return character.id === characterId});

  return (
    <div>
      <Header />

      <Routes>
        <Route
        path='/'
        element={
        <>
          <Filters 
          handleFilterName={handleFilterName} 
          searchName={searchName} 
          handleFilterHouse={handleFilterHouse} 
          searchHouse={searchHouse}
          handleClick={handleClickSort} />

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
