import CartList from './CartList'
import '../cart.css'

const CartDetail = () => {
	return (
		<section className="fp__cart_view mt_125 xs_mt_95 mb_100 xs_mb_70">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 bg-white shadow-sm">
						<CartList />
					</div>
				</div>
			</div>
		</section>
	)
}

export default CartDetail 
