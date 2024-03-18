import CartList from './CartList'
import TotalSummaryCart from './TotalSummaryCart'
import '../cart.css'

const CartDetail = () => {
	return (
		<section className="fp__cart_view mt_125 xs_mt_95 mb_100 xs_mb_70">
			<div className="container">
				<div className="row">
					<div className="col-lg-9 bg-white shadow-sm">
						<CartList />
					</div>
					<div className="col-lg-3 wow fadeInUp" data-wow-duration="1s">
						<TotalSummaryCart />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CartDetail 
