import PropTypes from 'prop-types'

import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import CartAction from '../../../redux/action/CartAction'
import '../SidebarCart/sidebarCart.css'

const CartItemList = (props) => {
	const { 
		id, 
		thumb_img: thumb_img, 
		price = 1, 
		quantity: defaultQuantity, 
		offer_price = 1, 
		name 
	} = props

	const dispatch = useDispatch()

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

		if (Number(quantity) > 100) {
			newQuantity = 100
			setQuantity(100)
		}

		dispatch(CartAction.updateQuantity({
			id,
			quantity: newQuantity
		}))
	}

	const handleRemoveCartItem = () => {
		dispatch(CartAction.removeCartItem(id))
	}

	const total = quantity * offer_price || 0

	return (
		<tr>
			<td className="fp__pro_img">
				<Image src={thumb_img} className="img-fluid" />
			</td>

			<td className="fp__pro_name">
				{name}
			</td>

			<td className="fp__pro_status td-center">
				<p className="price" style={{ color: 'var(--colorPrimary)' }}>
					${offer_price}
					<del style={{ marginLeft: '10px', color: '#747272' }}>đ{price}</del>
				</p>
			</td>

			<td className="fp__pro_select td-center menu_cart_amount">
				<span className='btn-quantity' onClick={() => updateQuantity('decrease')}>
					<FontAwesomeIcon icon={faMinus} style={{ fontSize: '10px' }}/>
				</span>
				<input className='quantity not-default' 
					type='number'
					min={1}
					max={100}
					value={quantity}
					onChange={handleChangeQuantity}
					onBlur={handleBlurQuantity}
				/>
				<span className='btn-quantity' onClick={() => updateQuantity('increase')}>
					<FontAwesomeIcon icon={faPlus} style={{ fontSize: '10px' }}/>
				</span>
			</td>

			<td className="fp__pro_tk td-center">
				<h6>{total}</h6>
			</td>

			<td className="fp__pro_icon td-center">
				<span className='del_icon' onClick={handleRemoveCartItem}>
					<FontAwesomeIcon icon={faTrash} />
				</span>
			</td>
		</tr>
	)
}

CartItemList.propTypes = {
	id: PropTypes.string,
	thumb_img: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number,
	total: PropTypes.number,
	detail: PropTypes.object,
	offer_price: PropTypes.number,
	name: PropTypes.string
}

export default CartItemList
