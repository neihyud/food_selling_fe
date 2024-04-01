const TotalSummaryCart = () => {

	const listPayment = [
		{
			img: 'src/assets/images/payment_paypal.png',
			name: 'paypal'
		},
		{
			img: 'src/assets/images/payment_stripe.png',
			name: 'stripe'
		},
		{
			img: 'src/assets/images/payment_stripe.png',
			name: 'cash'
		}
	]

	const getListMethodPayment = () => {
		return listPayment.map((item, index) => {
			const { img } = item
			return (
				<span className="fp__single_payment" key={index}>
					<img src={img} alt="payment method" className="img-fluid w-100 img-payment" />
				</span>
			)
		})
	}
	return (
		<>
			<div className="fp__cart_list_footer_button" >
				<h6>total cart</h6>
				<p>subtotal: <span>$124.00</span></p>
				<p>delivery: <span>$00.00</span></p>
				<p>discount: <span>$10.00</span></p>
				<p className="total"><span>total:</span> <span>$134.00</span></p>
			</div>
			<p style={{ paddingTop: '20px' }}></p>
			<div className="fp__cart_list_footer_button" >
				<h6>Payment Method</h6>
				<div>
					<div className="fp__payment_area">
						{getListMethodPayment()}
					</div>
					<p className="w-100" style={{ backgroundColor: '#eee' }}>checkout</p>
				</div>
			</div>
		</>
	)
}

export default TotalSummaryCart
