import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
  faUser
} from "@fortawesome/free-solid-svg-icons";

import Menu from "../../../components/Menu/Menu";
import "./header.css";
import { Image } from "react-bootstrap";
import config from "../../../config";
import { useDispatch } from "react-redux";
import HomeAction from "../../../redux/action/HomeAction";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenCartCheckout = () => {
    dispatch(HomeAction.setIsOpenCartCheckout(true));
  };

  const handleNavToDashboard = () => { 
    navigate("/dashboard");
  };

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
            <li onClick={handleOpenCartCheckout}>
              <FontAwesomeIcon icon={faCartShopping} />
            </li>
            <li onClick={handleNavToDashboard}>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </ul>
        </div>
      </nav>
    </>

  );
};

export default Header;
