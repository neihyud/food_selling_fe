import FoodCard from './FoodCard'
import './food.css'
const ListFoodCard = () => {
	const infoCard = [
		{
			price: 10,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		},
		{
			price: 20,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		},
		{
			price: 30,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		},
		{
			price: 40,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		},
		{
			price: 10,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		},
		{
			price: 20,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		},
		{
			price: 30,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		},
		{
			price: 40,
			imgUrl: 'src/assets/images/menu2_img_1.jpg',
			title: 'T1'
		}
	]

	const renderFood = infoCard.map((item, index) => {
		return <FoodCard key={index} {...item} />
	})
	return (
		<div className='row grid'>
			{renderFood}
		</div>
	)
}

export default ListFoodCard
