import { useSelector, useDispatch } from 'react-redux'
import IntroductionSection from '../Introduction/IntroductionSection'
import WrapperSection from '../Wrapper/WrapperSection.jsx'
import FoodCardDetail from './Food/FoodCardDetail.jsx'
import ListFoodCard from './Food/ListFoodCard.jsx'
import './foodMenu.css'
import { useEffect } from 'react'
import { createAxiosJwt } from '../../../createInstance.js'
import ManageProductAction from '../../redux/action/admin/ManageProductAction.js'
import HomeAction from '../../redux/action/HomeAction.js'

const FoodMenu = () => {
	const { isOpenFoodDetail } = useSelector((state) => state.homeReducer)
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	const { listProduct, listCategory } = useSelector((state) => state.admin.manageProductReducer)

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
		return listCategory.map((category) => {
			<button data-filter=".burger">{category.title}</button>

		})
	}

	const getProductByCategoryId = (categoryId) => {
		dispatch(HomeAction.getProductByCategoryId(axiosJwt, categoryId))
	}
	
	useEffect(() => {
		dispatch(HomeAction.getListCategory(axiosJwt))
	}, [])

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
								<button className=" active" data-filter="*">all menu</button>
								{renderCategory()}
								<button data-filter=".burger">A</button>
								<button data-filter=".chicken">A</button>
								<button data-filter=".pizza">A</button>
								<button data-filter=".dresserts">A</button>
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
