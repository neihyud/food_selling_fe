import './address.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddressItem from './AddressItem'
import AddressManagement from './AddressManagement'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import DashboardAction from '../../../redux/action/DashboardAction'
import { createAxiosJwt } from '../../../../createInstance'

const Address = () => {
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	const { listAddress } = useSelector((state) => state.dashboardReducer)

	useEffect(() => {
		dispatch(DashboardAction.getListAddress(axiosJwt))
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const renderAddress = listAddress?.map((item, index) => {
		return <AddressItem key={index} {...item} />
	})

	return (
		<div className="fp_dashboard_body address_body">
			<h3>address <a className="dash_add_new_address">
				<FontAwesomeIcon icon={faPlus} /> add new
			</a>
			</h3>
			<div className="fp_dashboard_address">
				<div className="fp_dashboard_existing_address">
					<div className="row">
						{renderAddress}
					</div>
				</div>

				<AddressManagement type={'add'} />
				<AddressManagement type={'edit'} />
			</div>
		</div>
	)
}

export default Address
