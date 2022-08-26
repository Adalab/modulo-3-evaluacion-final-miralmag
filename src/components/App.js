import { useEffect, useState } from 'react';
import getDataApi from '../services/hpApi';
import CharacterList from './CharacterList';
import Logo from '../images/logo.png';
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
      <header className='header'>
      <img className='header__logo' src={Logo} />
      <h1>¡Bienvenido, muggle!</h1>
      </header>
      <CharacterList characters={characters}/>
    </div>
  );
}

export default App;
