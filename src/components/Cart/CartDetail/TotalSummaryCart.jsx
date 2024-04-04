import { useDispatch, useSelector } from 'react-redux'
import CartAction from '../../../redux/action/CartAction'
import { useMemo } from 'react'
import { cloneDeep } from 'lodash'
import config from '../../../config'
import { createAxiosJwt } from '../../../../createInstance'

const TotalSummaryCart = () => {
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()
	
	const { infoCheckout, listCartItem } = useSelector((state) => state.cartReducer)

	const listPayment = config.paymentMethod

	const subTotal = useMemo(() => {
		return listCartItem.reduce((total, curr) => {
			const currentPrice = curr.offer_price ? curr.offer_price : curr.price
			return total + (curr.quantity * currentPrice)
		}, 0)

	}, [listCartItem])

	const handleChoosePayment = (id) => { 
		dispatch(CartAction.setInfoCheckout({ payment: id }))
	}

	const getListMethodPayment = () => {
		return listPayment.map((item) => {
			const { img } = item

			let selected = false

			if (infoCheckout.payment === item.id) {
				selected = true
			}
			
			return (
				<span 
					className={`fp__single_payment ${selected ? 'selected' : ''}`} 
					key={item.id} 
					onClick={() => handleChoosePayment(item.id)}
				>
					<img src={img} alt="payment method" className="img-fluid w-100" />
				</span>
			)
		})
	}

	// to do
	const isDisableCheckout = () => {
		const fieldCheck = ['address', 'payment', 'listCartItem']
		const tempInfoCheckout = cloneDeep(infoCheckout)
		tempInfoCheckout.listCartItem = cloneDeep(listCartItem)

		for (const field of fieldCheck) {

			if (!tempInfoCheckout[field]) {
				return true
			}

			// to do verify each field

			// switch (tempInfoCheckout[field]) {
			// 	case Array.isArray(field):
			// 		if (!field.length) {
			// 			return true
			// 		}
			// 		break
			// 	case (typeof field === 'object' && field !== null):
			// 		if (!Object.keys(field).length) {
			// 			return true
			// 		}
			// 		break
			// 	case typeof field === 'string':
			// 		if (!field) {
			// 			return true
			// 		}
			// 		break
			// 	default:
			// 		return true
			// }
		}

		return false
	}

	const handleCheckout = () => { 
		dispatch(CartAction.handleCheckout(axiosJwt))
	}

	return (
		<>
			<div className="fp__cart_list_footer_button" >
				<h6>total cart</h6>
				<p>subtotal: <span>$124.00</span></p>
				<p>delivery: <span>$00.00</span></p>
				<p>discount: <span>$10.00</span></p>
				<p className="total"><span>total:</span> <span>${subTotal}</span></p>
			</div>
			<p style={{ paddingTop: '20px' }}></p>
			<div className="fp__cart_list_footer_button" >
				<h6>Payment Method</h6>
				<div>
					<div className="fp__payment_area">
						{getListMethodPayment()}
					</div>
					<button 
						className="w-100 btn-checkout" 
						// style={{ backgroundColor: '#eee' }}
						disabled={isDisableCheckout()}
						onClick={handleCheckout}
					>
						checkout
					</button>
				</div>
			</div>
		</>
	)
}

export default TotalSummaryCart
