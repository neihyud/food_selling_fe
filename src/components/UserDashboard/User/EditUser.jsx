import PropTypes from 'prop-types'
import useForm from '../../../hooks/useForm'
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { createAxiosJwt } from '../../../../createInstance'
import DashboardAction from '../../../redux/action/DashboardAction'

const EditUser = ({ user }) => {
	const dispatch = useDispatch()

	const axiosJwt = createAxiosJwt()

	const fieldsConfig = {
		username: {
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
		validateForm
	} = useForm(fieldsConfig)

	useEffect(() => {
		handleSetDataForm({ ...user })
	}, [])

	const handleSubmit = () => {
		if (validateForm(dataForm)) {
			dispatch(DashboardAction.updateUser(axiosJwt, dataForm))
		}
	}

	return (
		<div>
			<div className="row">
				<div className="col-12">
					<div className="form-group">
						<label className='form-label' style={{ marginBottom: 0 }}>User Name</label>
						<input 
							className="form-control"
							type="text" 
							placeholder="Name" 
							style={{ marginBottom: '10px' }}
							name='name'
							value={dataForm.name}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-12">
					<div className="form-group" >
						<label className='form-label' style={{ marginBottom: 0 }}>Email</label>
						<input 
							type="email" 
							placeholder="Email" 
							style={{ marginBottom: '10px' }}
							name='email'
							value={dataForm.email}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="col-xl-12">
					<button className="common_btn" onClick={handleSubmit}>submit</button>
				</div>
			</div>
		</div>
	)
}

EditUser.propTypes = {
	user: PropTypes.object
}

export default EditUser
