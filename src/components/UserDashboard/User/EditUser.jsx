import PropTypes from 'prop-types'
import useForm from '../../../hooks/useForm'
import { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { createAxiosJwt } from '../../../../createInstance'
import DashboardAction from '../../../redux/action/DashboardAction'

const EditUser = ({ user }) => {
	const [isChangeFile, setIsChangeFile] = useState(false)
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
				<div className="col-12">
					<div className="form-group" >
						<label className='form-label' style={{ marginBottom: 0 }}>Image</label>
						<div style={{ width: '200px', padding: '10px 0' }}>
							{dataForm?.img && isChangeFile && <img src={`${URL.createObjectURL(dataForm?.img)}`} alt="" />}
							{dataForm?.img && !isChangeFile && <img src={`${dataForm?.img}`} alt="" />}
						</div>
						<input 
							type="file" 
							name="img" 
							onChange={(event) => { 
								setIsChangeFile(true)
								handleChange(event, 'file')
							}}
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
