import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import WrapperContent from '../../WrapperContent'
import useForm from '../../../../hooks/useForm'
import { createAxiosJwt } from '../../../../../createInstance'
import ManageProductService from '../../../../services/admin/ManageProductService'
import { Button } from 'react-bootstrap'
import { showToast } from '../../../../helper/toast'
const CategoryManagement = () => {
	const { id } = useParams()
	const axiosJwt = createAxiosJwt('admin')

	const infoComponent = useMemo(() => {
		if (id) {
			return {
				title: 'Edit Category',
				btnTitle: 'Edit'
			}
		}

		return {
			title: 'Create Category',
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
		}
	}

	const { dataForm, handleBlur, handleChange, handleSetDataForm, error, setError, validateForm, hasDisableBtnSubmit } = useForm(fieldsConfig, { status: '1' })
	
	const getCurrentCategory = async () => {
		const response = await ManageProductService.getCategory(axiosJwt, id)

		if (response.success) {
			handleSetDataForm(response.data)
		}
	}

	useEffect(() => {
		if (id) {
			getCurrentCategory()
		}
	}, [])

	const handleCreateCategory = async () => { 
		if (validateForm(dataForm)) {
			const response = await ManageProductService.createCategory(axiosJwt, dataForm)
			if (response.success) {
				handleSetDataForm({})
				showToast('success')
			} else if (response.errors) {
				setError(response.errors)
			}
		}
	}

	const handleUpdateCategory = async () => {
		if (validateForm(dataForm)) {
			const response = await ManageProductService.updateCategory(axiosJwt, id, dataForm)
			if (response.success) {
				showToast('success')
				
			} else if (response.errors) {
				setError(response.errors)
			}
		}
	}

	const handleAction = () => {
		if (id) {
			handleUpdateCategory()
		} else {
			handleCreateCategory()
		}
	}

	const isDisableBtn = hasDisableBtnSubmit()

	return (
		<WrapperContent
			title='Category'
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
					<label>Description</label>
					<textarea 
						name='description'
						className='form-control input-primary'
						value={dataForm?.description || ''}
						onChange={handleChange}
					>

					</textarea>
				</div>

				<div className="form-group">
					<label>Status</label>
					<select 
						name="status" 
						className="form-control"
						defaultValue={'1'}
						value={Number(dataForm?.status) ? '1' : '0'}
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

export default CategoryManagement
