import { useMemo } from 'react'
import WrapperContent from '../../WrapperContent'
import { useParams } from 'react-router-dom'
import useForm from '../../../../hooks/useForm'
import { Button } from 'react-bootstrap'
import { createAxiosJwt } from '../../../../../createInstance'
import { showToast } from '../../../../helper/toast'
import ManageProductService from '../../../../services/admin/ManageProductService'

const StaffManagement = () => {
	const { id } = useParams()
	const axiosJwt = createAxiosJwt()

	const infoComponent = useMemo(() => {
		if (id) {
			return {
				title: 'Edit Account',
				btnTitle: 'Edit'
			}
		}

		return {
			title: 'Create Account',
			btnTitle: 'Create'
		}
	}, [id])

	const fieldsConfig = {
		name: {
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

	const handleCreateAccount = async () => { 
		if (validateForm(dataForm)) {
			const response = await ManageProductService.createProduct(axiosJwt, dataForm)
			if (response.success) {
				handleSetDataForm({})
				showToast('success')
			} else if (response.errors) {
				setError(response.errors)
			}
		}
	}

	const handleUpdateAccount = async () => {
		if (validateForm(dataForm)) {
			const response = await ManageProductService.updateProduct(axiosJwt, id, dataForm)
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

	const isDisableBtn = hasDisableBtnSubmit()		

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
						name="name" 
						className="form-control input-primary"
						value={dataForm?.name || ''}
						onChange={handleChange}
						onBlur={handleBlur}
						autoFocus
					/>
					<span className="form-message">{error?.name}</span>
				</div>

				<div className="form-group">
					<label>Password</label>
					<input 
						type="password" 
						name="password" 
						className="form-control input-primary"
						value={dataForm?.password || ''}
						onChange={handleChange}
						onBlur={handleBlur}
						autoFocus
					/>
					<span className="form-message">{error?.name}</span>
				</div>

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
					disabled={isDisableBtn}
					variant={ isDisableBtn ? 'secondary' : 'primary'}
					
				>
					{infoComponent.btnTitle}
				</Button>
			</div>
		</WrapperContent>
	)
}

export default StaffManagement
