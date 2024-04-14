import AddressItem from '../UserDashboard/Address/AddressItem'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TotalSummaryCart from '../Cart/CartDetail/TotalSummaryCart'
import './checkout.css'
import CartDetail from '../Cart/CartDetail'
import { useDispatch, useSelector } from 'react-redux'
import CartAction from '../../redux/action/CartAction'
import { useEffect, useState } from 'react'
import DashboardAction from '../../redux/action/DashboardAction'
import { createAxiosJwt } from '../../../createInstance'
import AddNewAddress from './AddNewAddress'

const Checkout = () => {
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	const [isOpenAddAddress, setIsOpenAddAddress] = useState() 

	const { listAddress } = useSelector((state) => state.dashboardReducer)

	useEffect(() => {
		dispatch(DashboardAction.getListAddress(axiosJwt))
	}, [])

	const { infoCheckout } = useSelector((state) => state.cartReducer)

	const handleSelectedAddress = (item) => {
		dispatch(CartAction.setInfoCheckout({ address: item }))
	}

	const renderAddress = () => {
		if (!listAddress || !listAddress.length) {
			return <p style={{ margin: '20px 0 40px', color: 'red' }}>No have address, please add new address to checkout !!!</p>
		}

		return listAddress?.map((item, index) => {
			let selected = false
	
			// to do check selected
			if (infoCheckout?.address?.id === item.id) {
				selected = true
			}
	
			return (
				<AddressItem 
					key={index} 
					{...item} 
					handleAction={() => handleSelectedAddress(item)}
					selected={selected}
					type='checkout'
				/>
			)
		})
	}

	const handleChangeNote = (event) => { 
		dispatch(CartAction.setInfoCheckout({ note: event.target.value }))
	}
	
	const handleOpenAddNewAddress = () => {
		setIsOpenAddAddress(true)
	}
	
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
										}}
										onClick={handleOpenAddNewAddress}
										>
											<FontAwesomeIcon icon={faPlus} />
										</span>
									</h5>
									<div className="row">
										{renderAddress()}
									</div>
	
									<div className="col-md-12 col-lg-12 col-xl-12">
										<div className="fp__check_single_form">
											<h5>Additional Information</h5>
											<textarea 
												rows="2"
												className='w-100'
												placeholder="Notes about your order, e.g. special notes for delivery"
												onChange={handleChangeNote}
											/>
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

			{isOpenAddAddress ? <AddNewAddress handleClose={() => setIsOpenAddAddress(false)}/> : undefined}
		
		</>
	)
}

export default Checkout
