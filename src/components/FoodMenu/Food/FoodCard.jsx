import PropTypes from 'prop-types'

import { Image } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import HomeAction from '../../../redux/action/HomeAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarBold } from '@fortawesome/free-solid-svg-icons'

const FoodCard = (props) => {
	const { _id, thumb_img, price, name: title, category, offer_price, type, average_rating, reviews_count } = props
	const dispatch = useDispatch()

	const handleOpenFoodDetail = () => {
		dispatch(HomeAction.setIsOpenFoodDetail(true))
		window.location.replace(`/food/${_id}?categoryId=${category.id}`)
	}

	const handleAddToCard = async () => {
		
		const infoProduct = {
			id: _id,
			name: title, 
			price: price, 
			offer_price: offer_price, 
			thumb_img, 
			quantity: 1
		}
		
		dispatch(HomeAction.addToCart(infoProduct))
	}

	const customClass = type === 'custom-slide' ? '' : 'col-xl-3 col-sm-6 col-lg-4' 

	const renderRate = () => {
		return new Array(5).fill(0).map((_, index) => {
			if (average_rating && average_rating > index && average_rating < index + 1) {
				return	(<FontAwesomeIcon icon={faStarHalfAlt} key={index} />)
			}
			
			if (average_rating && average_rating >= (index + 1)) {
				return	(<FontAwesomeIcon icon={faStarBold} key={index} />)
			}

			return (<FontAwesomeIcon icon={faStar} key={index} />)
		})
	}

	return (
		<div className={`wow fadeInUp ${customClass}`}>
			<div className="fp__menu_item">
				<div className="fp__menu_item_img" onClick={handleOpenFoodDetail}>
					<Image src={thumb_img} alt="menu" className="img-fluid w-100" rounded style={{ cursor: 'pointer' }}/>
					<span className="category" >{category?.name}</span>
				</div>
				<div className="fp__menu_item_text">
					<div className='rating'>{renderRate()} {` (${reviews_count})`}</div>
					<span className="title">
						{title}
					</span>
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
	_id: PropTypes.string,
	price: PropTypes.number,
	thumb_img: PropTypes.string,
	name: PropTypes.string,
	category: PropTypes.object,
	offer_price: PropTypes.number,
	type: PropTypes.string,
	average_rating: PropTypes.number, 
	reviews_count: PropTypes.number
}

export default FoodCard
