const TotalSummaryCart = () => {
	return (
		<div className="fp__cart_list_footer_button" >
			<h6>total cart</h6>
			<p>subtotal: <span>$124.00</span></p>
			<p>delivery: <span>$00.00</span></p>
			<p>discount: <span>$10.00</span></p>
			<p className="total"><span>total:</span> <span>$134.00</span></p>
			<a className="common_btn" style={{ marginTop: '50px', display: 'inline-block' }}>checkout</a>
		</div>
	)
}

export default TotalSummaryCart
