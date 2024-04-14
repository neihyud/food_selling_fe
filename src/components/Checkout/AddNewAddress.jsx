import { useDispatch } from 'react-redux'
import { createAxiosJwt } from '../../../createInstance'
import DashboardAction from '../../redux/action/DashboardAction'
import useForm from '../../hooks/useForm'
import ModalHandCustom from '../Modal/ModalHandCustom'

const AddNewAddress = ({ handleClose }) => {
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

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

	const handleAction = () => { 
		if (validateForm(dataForm)) {
			dispatch(DashboardAction.addAddress(axiosJwt, dataForm))
			handleClose()
		}
	}
	return (
		<ModalHandCustom handleClose={handleClose}>
			<div className='wrapper-content-modal' onClick={(event) => event.stopPropagation()}>
				<div className="fp_dashboard_manage_address">
					<div className="row">
						<div className="col-12">
							<h4> add new address</h4>
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
								{'Save'}
							</button>
							<button type="button" className="common_btn cancel_new_address" 
								style={{ marginRight: '20px' }}
								onClick={handleClose}
							>
  							cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</ModalHandCustom>
	)
}

export default AddNewAddress
