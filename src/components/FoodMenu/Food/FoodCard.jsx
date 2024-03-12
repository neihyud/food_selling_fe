import PropTypes from 'prop-types';

import { faEye, faHeart, faStar, faStarHalfAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'

import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const FoodCard = ({ imgUrl, price, title }) => {
  return (
    <div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
      <div className="fp__menu_item">
        <div className="fp__menu_item_img">
          <Image src={imgUrl} alt="menu" className="img-fluid w-100" rounded />
          <a className="category" href="#">Biryani</a>
        </div>
        <div className="fp__menu_item_text">
          <p className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalfAlt} />
            <FontAwesomeIcon icon={faStar} />
            <span>10</span>
          </p>
          <a className="title">
            {title}
          </a>
          <h5 className="price">${price}</h5>
          <ul className="d-flex flex-wrap justify-content-center">
            <li>
              <a href="#" data-bs-toggle="modal" data-bs-target="#cartModal">
                <FontAwesomeIcon icon={faShoppingBasket} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faHeart} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faEye} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div >
  )
}

FoodCard.propTypes = {
  price: PropTypes.number,
  imgUrl: PropTypes.string,
  title: PropTypes.string
};

export default FoodCard