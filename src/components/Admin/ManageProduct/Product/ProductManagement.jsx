import { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import WrapperContent from '../../WrapperContent'
import useForm from '../../../../hooks/useForm'
import { Button } from 'react-bootstrap'
import ManageProductService from '../../../../services/admin/ManageProductService'
import { createAxiosJwt } from '../../../../../createInstance'
import { showToast } from '../../../../helper/toast'
import ManageProductAction from '../../../../redux/action/admin/ManageProductAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductManagement = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
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
		price: {
			validates: [
				(value) => {
					if (value) {
						return ''
					}

					return 'Field is required'
				}
			]
		},
		category_id: {
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
	
	const getCurrentProduct = async () => {
		const response = await ManageProductService.getProduct(axiosJwt, id)

		if (response.success) {	
			handleSetDataForm({
				...response.data, 
				img: response.data?.thumb_img
			})
		}
	}

	useEffect(() => {
		if (id) {
			// to do load current product
			getCurrentProduct()
		}

		dispatch(ManageProductAction.getListCategory(axiosJwt))

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const { listCategory } = useSelector((state) => state.admin.manageProductReducer)

	useEffect(() => {
		if (id || !listCategory.length) {
			return undefined
		}
		
		handleSetDataForm({
			...dataForm,
			category_id: listCategory && listCategory[0]?.id
		})

		return () => {}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [listCategory])

	const handleCreateProduct = async () => { 
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

	const handleUpdateProduct = async () => {
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
			handleUpdateProduct()
		} else {
			handleCreateProduct()
		}
	}

	const getCategories = () => {
		return (
			<>
				<select 
					name="category_id" 	
					className="form-control select"
					onChange={handleChange}
					value={dataForm?.category_id || ''}
				>
					{listCategory?.map((item) => {
						return (<option key={item.id} value={item.id}>{item.name}</option>)
					})}
				</select>
				<span className="form-message">{error?.category_id}</span>
			</>

		)
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
						<div style={{ width: '200px', padding: '10px 0' }}>
							<img src={`${dataForm?.img}`} alt="" />
						</div>
						<input 
							type="file" 
							name="img" 
							onChange={(event) => handleChange(event, 'file')}
						/>
					</div>
					<span className="form-message">{error?.image}</span>
					
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
					{getCategories()}
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
