import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import CartAction from '../../../redux/action/CartAction'
import { useState } from 'react'

const Dish = (props) => {
	const dispatch = useDispatch()

	const { 
		id,
		name, 
		price = 2, 
		offer_price = 1, 
		thumb_img = 'src/assets/images/menu8.png', 
		quantity: defaultQuantity = 1
	} = props
	
	const [quantity, setQuantity] = useState(defaultQuantity)

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

		dispatch(CartAction.updateQuantity({
			id,
			quantity: newQuantity
		}))
	}

	const handleRemoveCartItem = () => {
		dispatch(CartAction.removeCartItem(id))
	}
	
	return (
		<li>
			<div className="menu_cart_img">
				<Image src={thumb_img} alt="menu" className="img-fluid w-100" />
			</div>
			<div className="menu_cart_text">
				<a className="title">{name}</a>
				<p className="price">
				đ{offer_price} 
				</p>
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
			</div>
			<span className="del_icon" onClick={handleRemoveCartItem}>
				<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
			</span>
		</li>
	)
}

Dish.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	offer_price: PropTypes.number,
	thumb_img: PropTypes.string,
	quantity: PropTypes.number
}

export default Dish
