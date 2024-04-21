import { useDispatch, useSelector } from 'react-redux'
import ListFoodCard from '../FoodMenu/Food/ListFoodCard'
import './menuFoodPage.css'
import HomeAction from '../../redux/action/HomeAction'
import { createAxiosJwt } from '../../../createInstance'
import { useEffect, useState } from 'react'
import useForm from '../../hooks/useForm'
const MenuFoodPage = () => {
	const { listCategory } = useSelector((state) => state.homeReducer)
	const axiosJwt = createAxiosJwt()
	const dispatch = useDispatch()
	// const [currentCategoryId, setCurrentCategoryId] = useState()
  
	const renderOption = () => {
		return listCategory.map((category, index) => {
			return	(
				<option value={category.id} key={index}>{category.name}</option>
			)
               
		})
	}

	const { 
		dataForm, 
		handleChange, 
		handleSetDataForm 
	} = useForm({})

	const handleChangeCategory = (event) => {
		handleSetDataForm({
			...dataForm,
			categoryId: event.target.value
		})
	}

	useEffect(() => {
		dispatch(HomeAction.getListCategory(axiosJwt))
		dispatch(HomeAction.getListProduct(axiosJwt))
	}, [])

	const handleSearch = () => {
		dispatch(HomeAction.searchFood(axiosJwt, dataForm))
	}
	return (
		<div className='container'>
			<div className="fp__search_menu_form">
				<div className="row">
					<div className="col-xl-6 col-md-5">
						<input 
							type="text" 
							name='search'
							placeholder="Search..." 
							value={dataForm?.search || ''}
							onChange={handleChange}
						/>
					</div>
					<div className="col-xl-4 col-md-4">
						<select 
							style={{ height: '50px', backgroundColor: 'white' }}
							name='categoryId'
							value={dataForm?.categoryId || ''}
							onChange={handleChangeCategory}
						>
							<option value={''} >All</option>
							{renderOption()}
						</select>
					</div>
					<div className="col-xl-2 col-md-3">
						<button className="common_btn" style={{ marginTop: 0 }} onClick={handleSearch}>search</button>
					</div>
				</div>

			</div>

			<ListFoodCard />

		</div>
	)
}

export default MenuFoodPage
