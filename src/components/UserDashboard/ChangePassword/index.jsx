import { createAxiosJwt } from '../../../../createInstance'
import { showToast } from '../../../helper/toast'
import useForm from '../../../hooks/useForm'
import './changePassword.css'

const ChangePassword = () => {

	const axiosJwt = createAxiosJwt()
	
	const fieldsConfig = {
		newPassword: {
			validates: [
				(value) => {
					const alphabeticRegExp = /(?=.*?[a-zA-Z])/
					const digitsRegExp = /(?=.*?[0-9])/
					const minLengthRegExp = /.{7,}/
					const alphabeticPassword = alphabeticRegExp.test(value)
					const digitsPassword = digitsRegExp.test(value)
					const minLengthPassword = minLengthRegExp.test(value)
					if (!alphabeticPassword ||
						!digitsPassword ||
						!minLengthPassword
					) {
						return 'Please enter 7 or more characters, using both numeric and alphabetic'
					}

					return ''
				}
			]
		},
		confirmNewPassword: {
			validates: [
				(value, object) => {
					if ((value || object.newPassword) && value !== object.newPassword) {
						return 'Please fill in the same value with field Password'
					}
					return ''
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

	const handleChangePassword = async () => {
		try {
			const response = await axiosJwt.put('/user/password', {
				...dataForm
			})
			if (response.data.success) {
				showToast('success')
				handleSetDataForm({})
			} 
		} catch (err) {
			showToast('error', err.response.data.errors[0].message)
			
		}
	
	}

	return (
		<div className="fp_dashboard_body fp__change_password">
			<div className="fp__review_input">
				<h3>change password</h3>
				<div className="comment_input pt-0">
					<div className="row">
						<div className="col-xl-12">
							<div className="fp__comment_input_single">
								<label className='form-label' style={{ marginBottom: 0 }}>Current Password</label>
								<input 
									type="password" 
									placeholder="Current Password" 
									name='oldPassword'
									value={dataForm?.oldPassword || ''}
									onChange={handleChange}
								/>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="fp__comment_input_single">
								<label className='form-label' style={{ marginBottom: 0 }}>New Password</label>
								<input 
									type="password" 
									placeholder="New Password" 
									name='newPassword'
									value={dataForm?.newPassword || ''}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<span className="form-message">{error?.newPassword}</span>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="fp__comment_input_single">
								<label className='form-label' style={{ marginBottom: 0 }}>Confirm Password</label>
								<input 
									type="password" 
									placeholder="Confirm Password" 
									name='confirmNewPassword'
									value={dataForm?.confirmNewPassword || ''}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
								<span className="form-message">{error?.confirmNewPassword}</span>
							</div>
							<button className="common_btn mt_20" onClick={handleChangePassword}>submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChangePassword
