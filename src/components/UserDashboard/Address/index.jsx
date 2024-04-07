import './address.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import AddressItem from './AddressItem'
import AddressManagement from './AddressManagement'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import DashboardAction from '../../../redux/action/DashboardAction'
import { createAxiosJwt } from '../../../../createInstance'

const Address = () => {
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	const { listAddress, typeUIAddress } = useSelector((state) => state.dashboardReducer)

	useEffect(() => {
		dispatch(DashboardAction.getListAddress(axiosJwt))

		return () => {
			dispatch(DashboardAction.setTypeUIAddress(''))
		}
	}, [])

	const [currentAddress, setCurrentAddress] = useState({}) 

	const handleAddNewAddress = () => {
		dispatch(DashboardAction.setTypeUIAddress('ADD'))
	}

	const handleActionAddressItem = (item) => (type) => {
		if (type === 'edit') {
			setCurrentAddress(item)
			dispatch(DashboardAction.setTypeUIAddress('EDIT'))
		}

		if (type === 'remove') {
			dispatch(DashboardAction.removeAddress(axiosJwt, item.id))

		}
	}

	const renderAddress = () => {
		if (typeUIAddress === 'ADD') {
			return <AddressManagement type={'add'} />
		}

		if (typeUIAddress === 'EDIT') {
			return <AddressManagement type={'edit'} currentAddress={currentAddress} />
		}

		if (Array.isArray(listAddress) && !listAddress.length) {
			return <h3 className='d-flex justify-content-center'>No Address, Please create new address to order food</h3>
		}

		return listAddress?.map((item, index) => {
			return <AddressItem key={index} {...item} handleActon={handleActionAddressItem(item)} />
		})
	} 

	return (
		<div className="fp_dashboard_body address_body">
			<h3>address 
				{!typeUIAddress && <button className="common_btn" onClick={handleAddNewAddress}>
					<FontAwesomeIcon icon={faPlus} /> add new
				</button>}
			</h3>
			<div className="fp_dashboard_address">
				<div className="fp_dashboard_existing_address">
					<div className="row">
						{renderAddress()}
					</div>
				</div>

			</div>
		</div>
	)
}

export default Address
