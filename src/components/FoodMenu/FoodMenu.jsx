import { useSelector, useDispatch } from 'react-redux'
import IntroductionSection from '../Introduction/IntroductionSection'
import WrapperSection from '../Wrapper/WrapperSection.jsx'
import FoodCardDetail from './Food/FoodCardDetail.jsx'
import ListFoodCard from './Food/ListFoodCard.jsx'
import './foodMenu.css'
import { useEffect, useState } from 'react'
import { createAxiosJwt } from '../../../createInstance.js'
import HomeAction from '../../redux/action/HomeAction.js'

const FoodMenu = () => {
	const { isOpenFoodDetail } = useSelector((state) => state.homeReducer)

	const [currentCategoryId, setCurrentCategoryId] = useState()

	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	const { listCategory } = useSelector((state) => state.homeReducer)

	const content = (
		<>
      Objectively pontificate quality models before intuitive information.<br />
      Dramatically recaptiualize multifunctional materials.
		</>
	)

	const getFoodCartDetail = () => {
		if (!isOpenFoodDetail) {
			return null
		}

		return <FoodCardDetail />
	}

	const renderCategory = () => {
		return listCategory?.map((category, index) => {
			return (
				<button 
					key={index} 
					onClick={() => setCurrentCategoryId(category.id)} 
					className={currentCategoryId === category.id ? 'active' : ''}
				>
					{category.name}
				</button>
			)
		})
	}

	const getProductByCategoryId = () => {
		dispatch(HomeAction.getProductByCategoryId(axiosJwt, currentCategoryId))
	}
	
	useEffect(() => {
		dispatch(HomeAction.getListCategory(axiosJwt))
	}, [])

	useEffect(() => {
		if (currentCategoryId) {
			getProductByCategoryId()
		} else {
			dispatch(HomeAction.getListProduct(axiosJwt))
		}
	}, [currentCategoryId])

	return (
		<WrapperSection>
			<section className="fp__menu mt_95 xs_mt_65">
				<div className="container">
					<IntroductionSection
						title={'Food Menu'}
						subTitle={'Our Popular Delicious Foods'}
						content={content}
					/>

					<div className="row wow fadeInUp" data-wow-duration="1s">
						<div className="col-12">
							<div className="menu_filter d-flex flex-wrap justify-content-center">
								<button className={currentCategoryId ? '' : 'active' } onClick={() => setCurrentCategoryId('')}>all</button>
								{renderCategory()}
							</div>
						</div>
					</div>
					<ListFoodCard />
					{/* <FoodCardDetail /> */}
					{/* to do  */}
					{/* {getFoodCartDetail()} */}

				</div>
			</section>
		</WrapperSection>
	)
}

export default FoodMenu
