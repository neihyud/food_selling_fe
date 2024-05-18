/* eslint-disable no-shadow */
import { useDispatch, useSelector } from 'react-redux'
import './foodDetail.css'
import HomeAction from '../../redux/action/HomeAction'
import { createAxiosJwt } from '../../../createInstance'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ListFoodCard from '../FoodMenu/Food/ListFoodCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStarHalfAlt, faStar } from '@fortawesome/free-regular-svg-icons'
import { faMinus, faPlus, faStar as faStarBold } from '@fortawesome/free-solid-svg-icons'
import CartAction from '../../redux/action/CartAction'
import Review from './Review'

const FoodDetail = () => {
	const dispatch = useDispatch()
	const [currentFood, setCurrentFood] = useState()
	const { id } = useParams()
	const axiosJwt = createAxiosJwt()
	const { listProduct } = useSelector((state) => state.homeReducer)
  
	const getProductByCategoryId = (id) => {
		dispatch(HomeAction.getProductByCategoryId(axiosJwt, id))
	}

	const getCurrentFood = async () => {
		const response = await axiosJwt.get(`/product/${id}`)
		setCurrentFood(response?.data?.data)
	} 

	useEffect(() => {
		const queryString = window.location.search

		const urlParams = new URLSearchParams(queryString)

		const categoryId = urlParams.get('categoryId')
    
		if (categoryId) {
			getProductByCategoryId(categoryId)
		}

		getCurrentFood()

	}, [])

	const renderFoodRelate = () => {
		if (listProduct && listProduct.length) {
      
			return (
				<>			
					<h2 style={{ marginTop: '20px' }}>related item</h2>  
					<ListFoodCard type='custom-slide' />
				</>
			)
               
		}

		return null
	}

	const { name, descrioption = '', short_description = '', price, offer_price, thumb_img = '', average_rating, reviews_count } = currentFood || {}

	const [quantity, setQuantity] = useState(1)

	const updateQuantity = (type) => {
		const data = { id }
		let newQuantity = 0 
		switch (type) {
			case 'increase':
				newQuantity = quantity + 1
				break
			case 'decrease':
				if (quantity < 2) {
					return 1
				}

				newQuantity = quantity - 1
				break
		}

		data.quantity = newQuantity
		setQuantity(newQuantity)

		dispatch(CartAction.updateQuantity(data))
	}

	const handleChangeQuantity = (event) => {
		setQuantity(event.target.value)
	}

	const handleBlurQuantity = () => { 
		let newQuantity = quantity 

		if (Number(quantity) < 2 && Number(quantity) !== 1) {
			newQuantity = 1
			setQuantity(1)
		}

		if (Number(quantity) > 100) {
			newQuantity = 100
			setQuantity(100)
		}

		dispatch(CartAction.updateQuantity({
			id,
			quantity: newQuantity
		}))
	}

	const handleAddToCard = async () => {
		
		const infoProduct = {
			id: id,
			name: name, 
			price: price, 
			offer_price: offer_price, 
			thumb_img, 
			quantity: quantity
		}
		
		dispatch(HomeAction.addToCart(infoProduct))
	}

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
		<section className="fp__menu_details mt_115 xs_mt_85 mb_95 xs_mb_65" style={{ marginTop: '40px' }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-5 col-md-9 wow fadeInUp">
						<img className="zoom ing-fluid w-100" src={thumb_img} alt="product"/>
					</div>
					<div className="col-lg-7 wow fadeInUp">
						<div className="fp__menu_details_text">
							<h2>{name}</h2>
							<p className="rating">
								{renderRate()}
								<span>{`(${reviews_count})`}</span>
							</p>
							<h3 className="price">${offer_price} <del>đ{price}</del> </h3>
							<p className="short_description">{short_description}</p>

							<div className="details_quantity">
								<h5>select quantity</h5>
								<div className="quantity_btn_area d-flex flex-wrap align-items-center">
									<div className='menu_cart_amount'>
										<span className='btn-quantity' onClick={() => updateQuantity('decrease')}>
											<FontAwesomeIcon icon={faMinus} style={{ fontSize: '10px' }}/>
										</span>
										<input className='quantity not-default' 
											type='number'
											min={1}
											value={quantity}
											onChange={handleChangeQuantity}
											onBlur={handleBlurQuantity}
										/>
										<span className='btn-quantity' onClick={() => updateQuantity('increase')}>
											<FontAwesomeIcon icon={faPlus} style={{ fontSize: '10px' }}/>
										</span>
									</div>
									<div className='center' style={{ fontWeight: 600, fontSize: '22px', marginLeft: '20px' }}>
										${quantity * offer_price}
									</div>
								</div>
							</div>
							<div className='d-flex flex-wrap'>
								<button className='common_btn' onClick={handleAddToCard} style={{ marginTop: 0, marginBottom: '20px' }}>Add to cart</button>
							</div> 
						</div>
					</div>
					<div className="col-12" style={{ padding: '8px' }}>
						<div className="fp__menu_description_area">
							{/* <div className="tab-content"> */}
							{/* {getContentTab()} */}
							<Review id={id}/>
							{/* </div> */}
						</div>
						<div className="fp__related_menu">
							{renderFoodRelate()}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default FoodDetail
