import { useSelector } from 'react-redux'
import FoodCard from './FoodCard'
import './food.css'
import PropTypes from 'prop-types'
import Slider from 'react-slick'
const ListFoodCard = ({ type }) => {

	const { listProduct } = useSelector((state) => state.homeReducer)

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4
	}
	
	const renderFood = () => {
		if (listProduct && listProduct.length) {
			return listProduct.map((item, index) => {
				return (<FoodCard key={index} {...item} type={type}/>)
			})
		}

		return (<h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>Not found food</h2>)
	}

	const renderList = () => {
		switch (type) {
			case 'custom-slide':
				return (
					<>
						<div className="slider-container">
							<Slider {...settings}>
								{renderFood()}
							</Slider>
						</div>
						<p style={{ paddingBottom: '30px' }}></p>	
					</>
				)
			default:
				return (
					<div className='row grid'>
						{renderFood()}
						<p style={{ paddingBottom: '30px' }}></p>	
					</div>
				)
		}
	}

	return (
		<>{renderList()}</>
	)
}

ListFoodCard.propTypes = {
	type: PropTypes.string
}

export default ListFoodCard
