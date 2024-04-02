import { useDispatch, useSelector } from 'react-redux'
import CartAction from '../../../redux/action/CartAction'
import { useMemo } from 'react'

const TotalSummaryCart = () => {
	const dispatch = useDispatch()
	
	const { infoCheckout, listCartItem } = useSelector((state) => state.cartReducer)

	const listPayment = [
		{
			img: 'src/assets/images/payment_paypal.png',
			name: 'paypal',
			id: 1
		},
		{
			img: 'src/assets/images/payment_stripe.png',
			name: 'stripe',
			id: 2
		},
		{
			img: 'src/assets/images/payment_stripe.png',
			name: 'cash',
			id: 3
		}
	]

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
		return null
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
						className="w-100" 
						style={{ backgroundColor: '#eee' }}
						disabled={isDisableCheckout()}
					>
						checkout
					</button>
				</div>
			</div>
		</>
	)
}

export default TotalSummaryCart
