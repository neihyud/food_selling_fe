import AddressItem from '../UserDashboard/Address/AddressItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TotalSummaryCart from '../Cart/CartDetail/TotalSummaryCart'
import './checkout.css'
import CartDetail from '../Cart/CartDetail'

const Checkout = () => {
	const listAddress = [
		{}, {}, {}, {}
	]

	const renderAddress = listAddress.map((item, index) => {
		return <AddressItem key={index} {...item} type='no-action' />
	})
	return (
		<>
			<section className="fp__cart_view mt_125 xs_mt_95 mb_100 xs_mb_70" >
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-lg-7 wow fadeInUp" data-wow-duration="1s">
							<div className="fp__checkout_form">
								<div className="fp__check_form">
									<h5>
										select address
										<span className='animation-icon center' style={{ 
											background: '#ff8f8f', 
											height: '20px', 
											width: '20px'
											
										}}>
											<FontAwesomeIcon icon={faPlus} />
										</span>
									</h5>
									<div className="row">
										{renderAddress}
									</div>
	
									<div className="col-md-12 col-lg-12 col-xl-12">
										<div className="fp__check_single_form">
											<h5>Additional Information</h5>
											<textarea 
												rows="2"
												className='not-default w-100'
												placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
										</div>
									</div>
								</div>
							</div>
							<CartDetail />
						</div>
	
						<div className="col-lg-4 wow fadeInUp" data-wow-duration="1s">
							<TotalSummaryCart />
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Checkout
