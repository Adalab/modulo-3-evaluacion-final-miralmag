import { useEffect, useState } from 'react';
import getDataApi from '../services/hpApi';
import CharacterList from './CharacterList';
import '../styles/App.scss';

function App() {

  //Variables estado
  const [characters, setCharacters] = useState([])

  //Servicios
  useEffect(() => {
    getDataApi().then((data) => {
      setCharacters(data);
      console.log(characters);
    });
}, []);

  return (
    <div>
      <h1>¡Bienvenido, muggle!</h1>
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;
