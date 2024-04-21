import { useSelector } from 'react-redux'
import FoodCard from './FoodCard'
import './food.css'
const ListFoodCard = () => {

	const { listProduct } = useSelector((state) => state.homeReducer)

	const renderFood = () => {
		if (listProduct && listProduct.length) {
			return listProduct.map((item, index) => {
				return (<FoodCard key={index} {...item} />)
			})
		}

		return (<h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>Not found food</h2>)
	
	}
	return (
		<div className='row grid'>
			{renderFood()}
			<p style={{ paddingBottom: '30px' }}></p>	
		</div>
	)
}

export default ListFoodCard
