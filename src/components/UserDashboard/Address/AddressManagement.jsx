import PropTypes from 'prop-types'
import DashboardAction from '../../../redux/action/DashboardAction'
import { useDispatch } from 'react-redux'
import useForm from '../../../hooks/useForm'
import { createAxiosJwt } from '../../../../createInstance'
import { useEffect } from 'react'
const AddressManagement = ({ type, currentAddress }) => {

	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	let title = null
	let titleBtnAction = null

	switch (type) {
		case 'add':
			title = 'add address'
			titleBtnAction = 'save address'
			break
		case 'edit':
			title = 'edit address'
			titleBtnAction = 'update address'
	}

	const fieldsConfig = {
		last_name: {
			validates: [
				(value) => {
					if (value) {
						return ''
					}

					return 'Field is required'
				}
			]
		},
		phone: {
			validates: [
				(value) => {
					if (value) {
						return ''
					}

					return 'Field is required'
				}
			]
		}
	}

	const { 
		dataForm, 
		handleBlur, 
		handleChange, 
		handleSetDataForm, 
		error, 
		setError, 
		validateForm, 
		hasDisableBtnSubmit 
	} = useForm(fieldsConfig)

	useEffect(() => {
		if (type === 'edit') {
			handleSetDataForm(currentAddress)
		}
	}, [])

	const handleCloseAddressManagement = () =>{ 
		dispatch(DashboardAction.setTypeUIAddress(''))
	}

	const handleAction = () => { 
		if (validateForm(dataForm)) {
			switch (type) {
				case 'add':
					dispatch(DashboardAction.addAddress(axiosJwt, dataForm))
					break
				case 'edit':
					dispatch(DashboardAction.editAddress(axiosJwt, dataForm))

			}
		}
	}

	return (
		<>
			<div className="fp_dashboard_manage_address">
				<div className="row">
					<div className="col-12">
						<h4> {title}</h4>
					</div>
					<div className="col-md-6 col-lg-12 col-xl-6">
						<div className="fp__check_single_form">
							<input 
								type="text" 
								placeholder="First Name" 
								name='first_name'
								value={dataForm?.first_name || ''}	
								onChange={handleChange}
								
							/>
						</div>
					</div>
					<div className="col-md-6 col-lg-12 col-xl-6">
						<div className="fp__check_single_form">
							<input 
								type="text" 
								placeholder="Last Name" 
								name='last_name'
								value={dataForm?.last_name || ''}	
								onChange={handleChange}	
							/>
						</div>
					</div>
	
					<div className="col-md-6 col-lg-12 col-xl-6">
						<div className="fp__check_single_form">
							<input 
								type="text" 
								placeholder="Phone *" 
								name='phone'
								value={dataForm?.phone || ''}	
								onChange={handleChange}	
							/>
						</div>
					</div>
					<div className="col-md-6 col-lg-12 col-xl-6">
						<div className="fp__check_single_form">
							<input 
								type="email" 
								placeholder="Email" 
								name='email'
								value={dataForm?.email || ''}	
								onChange={handleChange}	
							/>
						</div>
					</div>
					<div className="col-md-12 col-lg-12 col-xl-12">
						<div className="fp__check_single_form">
							<textarea cols="3" rows="4"
								placeholder="Address"
								name='address'
								value={dataForm?.address || ''}	
								onChange={handleChange}	
							/>
						</div>
					</div>
					<div className="col-12">
						<button type="submit" className="common_btn" onClick={handleAction}>
							{titleBtnAction}
						</button>
						<button type="button" className="common_btn cancel_new_address" 
							style={{ marginRight: '20px' }}
							onClick={handleCloseAddressManagement}
						>
							cancel
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

AddressManagement.propTypes = {
	type: PropTypes.string,
	currentAddress: PropTypes.object
}

export default AddressManagement
