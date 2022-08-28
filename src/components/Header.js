import Logo from '../images/logo.png';
import '../styles/components/Header.scss';

function Header () {
    return (
        <header className='header'>
            <img className='header__logo' alt='Harry Potter' src={Logo} />
        </header>
    )
}

export default Header;
