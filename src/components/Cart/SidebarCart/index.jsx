import './sidebarCart.css'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dish from './Dish'
import { useDispatch, useSelector } from 'react-redux'
import HomeAction from '../../../redux/action/HomeAction'
import { useNavigate } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import CartAction from '../../../redux/action/CartAction'

const SideBarCart = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const { listCartItem } = useSelector((state) => state.cartReducer)

	useEffect(() => {
		dispatch(CartAction.getListCartItem())
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const subTotal = useMemo(() => {
		return listCartItem.reduce((total, curr) => {
			const currentPrice = curr.offer_price ? curr.offer_price : curr.price
			return total + (curr.quantity * currentPrice)
		}, 0)

	}, [listCartItem])

	const handleCloseCartCheckout = () => { 
		dispatch(HomeAction.setIsOpenCartCheckout(false))
	}

	const handleNavToPath = (path) => {
		navigate(path)
		dispatch(HomeAction.setIsOpenCartCheckout(false))
	}
	
	const totalItem = listCartItem.length !== 0 ? listCartItem.length.toString().padStart(2, '0') : 0 

	const renderList = () => {
		if (!totalItem) {
			return <h3 className='center' style={{ height: '95%' }}>Cart Empty</h3>
		}

		return listCartItem.map((item, index) => {
			return <Dish key={index} {...item} id={item.id.toString()}/>
		})
	}
	return (
		<div className="fp__menu_cart_area" onClick={handleCloseCartCheckout}>
			<div className="fp__menu_cart_body" onClick={(event) => event.stopPropagation()}>
				<div className="fp__menu_cart_header">
					<h5>total item ({totalItem})</h5>
					<span className="close_cart" onClick={handleCloseCartCheckout}>
						<FontAwesomeIcon icon={faTimes} />
					</span>
				</div>
				<ul>
					{renderList()}
				</ul>
				<div>
					<p className="subtotal">subtotal <span>đ{subTotal}</span></p>
					<button 
						className="common_btn w-100" 
						onClick={() => handleNavToPath('/checkout')}
						disabled={!totalItem}
					>
						checkout
					</button>
				</div>
			</div>
		</div>
	)
}

export default SideBarCart
