import { useSelector, useDispatch } from 'react-redux'
import IntroductionSection from '../Introduction/IntroductionSection'
import WrapperSection from '../Wrapper/WrapperSection.jsx'
import './foodMenu.css'
import { useEffect, useState } from 'react'
import { createAxiosJwt } from '../../../createInstance.js'
import HomeAction from '../../redux/action/HomeAction.js'
import FoodCard from './Food/FoodCard.jsx'

const FoodMenu = () => {

	const [currentCategoryId, setCurrentCategoryId] = useState()

	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	const { listCategory } = useSelector((state) => state.homeReducer)

	const [listProduct, setListProduct] = useState()

	const content = (
		<>
      Objectively pontificate quality models before intuitive information.<br />
      Dramatically recaptiualize multifunctional materials.
		</>
	)

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

	const renderFood = () => {
		if (listProduct && listProduct.length) {
			return listProduct.map((item, index) => {
			
				return (<FoodCard key={index} {...item} />)
			})
		}

		return (<h2 style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>Not found food</h2>)
	}

	// const getProductByCategoryId = () => {
	// 	dispatch(HomeAction.getProductByCategoryId(axiosJwt, currentCategoryId))
	// }

	const getProductByCategoryId = async () => {
		const response = await axiosJwt.get(`/common/top-popular-product-category-id?categoryId=${currentCategoryId}`)
		setListProduct(response?.data?.data)

	}

	const getProductAll = async () => {
		// const response = await axiosJwt.get('/common/top-popular-product?type=custom?limit=10')
		const response = await axiosJwt.get('/common/top-popular-product-user')

		setListProduct(response?.data?.data)

	}
	
	useEffect(() => {
		dispatch(HomeAction.getListCategory(axiosJwt))
	}, [])

	useEffect(() => {
		if (currentCategoryId) {
			getProductByCategoryId()
		} else {
			getProductAll()
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
					{/* <ListFoodCard /> */}
					<div className='row grid'>
						{renderFood()}
						<p style={{ paddingBottom: '30px' }}></p>	
					</div>

				</div>
			</section>
		</WrapperSection>
	)
}

export default FoodMenu
 
