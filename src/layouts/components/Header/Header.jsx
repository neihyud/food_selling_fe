import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Menu from '../../../components/Menu/Menu';
import './header.css'
import { Image } from 'react-bootstrap';
import config from '../../../config';
const Header = () => {

  return (
    <>
      <nav className='navbar navbar-expand-lg main_menu'>
        <div className='container'>
          <a className='navbar-brand'>
            <Image src="src/assets/images/logo.png" className='img-fluid' alt='Food Logo' />
          </a>

          <Menu items={config.menu} />

          <ul className="menu_icon d-flex flex-wrap">
            <li>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </ul>
        </div>
      </nav>
    </>

  )
}

export default Header