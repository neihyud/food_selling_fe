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
		error, 
		setError, 
		validateForm, 
		hasDisableBtnSubmit 
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
							placeholder="User Name" 
							style={{ marginBottom: '10px' }}
							name='username'
							value={dataForm.username}
							onBlur={handleBlur}
							onChange={handleChange}
						/>
						<span className="form-message">{error?.username}</span>
					</div>
				</div>
				<div className="col-12">
					<div className="form-group" >
						<label className='form-label' style={{ marginBottom: 0 }}></label>
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
