import { Link } from 'react-router-dom';
import '../../styles/Header.css'

const Header = () => {
  return (
    <header className='header-nav'>
      <h1>
        <Link to='/'>E-commerce</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to='register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
