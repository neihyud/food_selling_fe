import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import WrapperContent from '../../WrapperContent'
import useForm from '../../../../hooks/useForm'
import { Button } from 'react-bootstrap'
import ManageProductService from '../../../../services/admin/ManageProductService'
import { createAxiosJwt } from '../../../../../createInstance'
import { showToast } from '../../../../helper/toast'

const ProductManagement = () => {
	const { id } = useParams()
	const axiosJwt = createAxiosJwt()

	const infoComponent = useMemo(() => {
		if (id) {
			return {
				title: 'Edit Product',
				btnTitle: 'Edit'
			}
		}

		return {
			title: 'Create Product',
			btnTitle: 'Create'
		}
	}, [id])
	
	useEffect(() => {
		if (id) {
			// to do load current product
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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

	const { dataForm, handleBlur, handleChange, handleSetDataForm, error, setError, validateForm, hasDisableBtnSubmit } = useForm(fieldsConfig)

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
			title='Product'
			subTitle={infoComponent.title}
		>
			<div>
				<div className="form-group">
					<label>Image</label>
					<div id="image-preview" className="image-preview">
						<label htmlFor="image-upload" id="image-label">Choose File</label><br />
						<input 
							type="file" 
							name="image" 
							onChange={(event) => handleChange(event, 'file')}
						/>
					</div>
					
				</div>

				<div className="form-group">
					<label>Name</label>
					<input 
						type="text" 
						name="name" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm.name || ''}
					/>
					<span className="form-message">{error?.name}</span>

				</div>

				<div className="form-group">
					<label>Category</label>
					<select name="category" className="form-control select" value={'Select'}>
						<option value="1">{1}</option>
						<option value="2">{2}</option>
						<option value="3">{3}</option>
					</select>
				</div>

				<div className="form-group">
					<label>Price</label>
					<input 
						type="text" 
						name="price" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.price || ''}
					/>
					<span className="form-message">{error?.price}</span>

				</div>

				<div className="form-group">
					<label>Offer Price</label>
					<input 
						type="text" 
						name="offer_price" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.offer_price || ''}
					/>
					<span className="form-message">{error?.offer_price}</span>

				</div>

				{/* <div className="form-group">
					<label>Quantity</label>
					<input 
						type="number" 
						name="quantity" 
						min={0}
						defaultValue={0}
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.quantity || 0}
					/>
					<span className="form-message">{error?.quantity}</span>

				</div> */}

				<div className="form-group">
					<label>Short Description</label>
					<textarea 
						name="short_description" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.short_description || ''}
					>
					</textarea>
				</div>

				<div className="form-group">
					<label>Long Description</label>
					<textarea 
						name="long_description" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.long_description || ''}	
					></textarea>

				</div>

				<div className="form-group">
					<label>Sku</label>
					<input 
						type="text" 
						name="sku" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.sku || ''}	
						
					/>
				</div>

				<div className="form-group">
					<label>Status</label>
					<select name="status" className="form-control input-primary" >
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

export default ProductManagement
