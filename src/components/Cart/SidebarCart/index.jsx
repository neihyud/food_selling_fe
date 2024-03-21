import './sidebarCart.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dish from './Dish'
import { useDispatch } from 'react-redux'
import HomeAction from '../../../redux/action/HomeAction'
import { useNavigate } from 'react-router-dom'

const SideBarCart = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const listDish = [
		{}, {},
		{}, {},
		{}, {},
	]

	const handleCloseCartCheckout = () => { 
		dispatch(HomeAction.setIsOpenCartCheckout(false))
	}

	const handleNavToPath = (path) => {
		navigate(path)
		dispatch(HomeAction.setIsOpenCartCheckout(false))
	}

	const renderList = listDish.map((item, index) => {
		return <Dish key={index} {...item} />
	})

	return (
		<div className="fp__menu_cart_area" onClick={handleCloseCartCheckout}>
			<div className="fp__menu_cart_body" onClick={(event) => event.stopPropagation()}>
				<div className="fp__menu_cart_header">
					<h5>total item (05)</h5>
					<span className="close_cart" onClick={handleCloseCartCheckout}>
						<FontAwesomeIcon icon={faTimes} />
					</span>
				</div>
				<ul>
					{renderList}
				</ul>
				<div>
					<p className="subtotal">subtotal <span>$1220.00</span></p>
					<button className="common_btn w-100" onClick={() => handleNavToPath('/cart')}>view cart</button>
					<button className="common_btn w-100" onClick={() => handleNavToPath('/checkout')}>checkout</button>
				</div>
			</div>
		</div>
	)
}

export default SideBarCart
