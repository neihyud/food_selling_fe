import PropTypes from 'prop-types'

import { faStar, faStarHalfAlt } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import HomeAction from '../../../redux/action/HomeAction'
import { randomText } from '../../../../mock/mock'

const FoodCard = ({ id, thumb_img: imgUrl, price, name: title, category_id: category, offer_price }) => {
	const dispatch = useDispatch()

	const handleOpenFoodDetail = () => {
		dispatch(HomeAction.setIsOpenFoodDetail(true))
	}

	const handleAddToCard = async () => {

		const mockData = {
			id: JSON.stringify(Date.now()),
			name: randomText(), 
			price: Math.floor(Math.random() * 1000) + 1, 
			offer_price: Math.floor(Math.random() * 2000) + 1, 
			thumb_img: 'src/assets/images/menu8.png', 
			quantity: 1
		}
		
		const infoProduct = {
			id: id,
			name: title, 
			price: price, 
			offer_price: offer_price, 
			thumb_img: imgUrl, 
			quantity: 1
		}
		
		dispatch(HomeAction.addToCart(infoProduct))
	}

	return (
		<div className="col-xl-3 col-sm-6 col-lg-4 wow fadeInUp" data-wow-duration="1s">
			<div className="fp__menu_item">
				<div className="fp__menu_item_img" onClick={handleOpenFoodDetail}>
					<Image src={imgUrl} alt="menu" className="img-fluid w-100" rounded style={{ cursor: 'pointer' }}/>
					<a className="category" >{category?.name}</a>
				</div>
				<div className="fp__menu_item_text">
					{/* <p className="rating">
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStarHalfAlt} />
						<FontAwesomeIcon icon={faStar} />
						<span>5</span>
					</p> */}
					<a className="title">
						{title}
					</a>
					<h5 className="price">${offer_price} 
						<del style={{ fontSize: '15px' }}>${price}</del>
					
					</h5>
					<div className='d-flex flex-wrap justify-content-center'>
						<button className='common_btn' onClick={handleAddToCard}>Add to cart</button>
					</div>
				</div>
			</div>
		</div >
	)
}

FoodCard.propTypes = {
	id: PropTypes.string,
	price: PropTypes.number,
	thumb_img: PropTypes.string,
	name: PropTypes.string,
	category_id: PropTypes.object,
	offer_price: PropTypes.number
}

export default FoodCard
