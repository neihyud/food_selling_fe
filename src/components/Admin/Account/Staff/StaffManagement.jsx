import { useEffect, useMemo } from 'react'
import WrapperContent from '../../WrapperContent'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../../../../hooks/useForm'
import { Button } from 'react-bootstrap'
import { createAxiosJwt } from '../../../../../createInstance'
import { showToast } from '../../../../helper/toast'
import AccountService from '../../../../services/admin/AccountService'

const StaffManagement = () => {
	const { id } = useParams()
	const axiosJwt = createAxiosJwt()
	const navigate = useNavigate()

	const infoComponent = useMemo(() => {
		if (id) {
			return {
				title: 'Edit Account Staff',
				btnTitle: 'Edit'
			}
		}

		return {
			title: 'Create Account Staff',
			btnTitle: 'Create'
		}
	}, [id])

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
		},
		password: {
			noValidate: Boolean(id),
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

	const getCurrentStaff = async () => {
		const response = await AccountService.getAccount(axiosJwt, id)

		if (response.success) {	
			handleSetDataForm(response.data)
		}
	}

	useEffect(() => {
		if (id) {
			getCurrentStaff()
		}
	}, [])

	const handleCreateAccount = async () => { 
		if (validateForm(dataForm)) {
			const response = await AccountService.createAccount(axiosJwt, dataForm)
			if (response.success) {
				handleSetDataForm({})
				showToast('success')
				navigate('/admin/account')
			} else if (response.errors) {
				setError(response.errors)
			}
		}
	}	

	const handleUpdateAccount = async () => {
		if (validateForm(dataForm)) {
			const response = await AccountService.updateAccount(axiosJwt, id, dataForm)
			if (response.success) {
				showToast('success')
			} else if (response.errors) {
				setError(response.errors)
			}
		}
	}

	const handleAction = () => {
		if (id) {
			handleUpdateAccount()
		} else {
			handleCreateAccount()
		}
	}

	const isDisableBtn = () => {
		if (id) {
			return false
		}

		return hasDisableBtnSubmit()
	}

	const getPassword = () => {
		if (id) {
			return null
		}
		return (
			<div className="form-group">
				<label>Password</label>
				<input 
					type="password" 
					name="password" 
					className="form-control input-primary"
					value={dataForm?.password || ''}
					onChange={handleChange}
					onBlur={handleBlur}
				/>
				<span className="form-message">{error?.password}</span>
			</div>
		)
	}

	return (
		<WrapperContent
			title='Account'
			subTitle={infoComponent.title}
		>
			<div>
				<div className="form-group">
					<label>Name</label>
					<input 
						type="text" 
						name="username" 
						className="form-control input-primary"
						value={dataForm?.username || ''}
						onChange={handleChange}
						onBlur={handleBlur}
						autoFocus
					/>
					<span className="form-message">{error?.name}</span>
				</div>

				{/* <div className="form-group">
					<label>Password</label>
					<input 
						type="password" 
						name="password" 
						className="form-control input-primary"
						value={dataForm?.password || ''}
						onChange={handleChange}
						onBlur={handleBlurHasCondition()}
					/>
					<span className="form-message">{error?.password}</span>
				</div> */}
				{getPassword()}

				<div className="form-group">
					<label>Status</label>
					<select 
						name="status" 
						className="form-control"
						value={dataForm?.status || ''}
						onChange={handleChange}
					>
						<option value="1">Active</option>
						<option value="0">Inactive</option>
					</select>
				</div>

				<Button 
					type="button" 
					className="btn btn-primary" 
					onClick={handleAction}
					disabled={isDisableBtn()}
					variant={isDisableBtn() ? 'secondary' : 'primary'}
				>
					{infoComponent.btnTitle}
				</Button>
			</div>
		</WrapperContent>
	)
}

export default StaffManagement
