import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import WrapperContent from '../WrapperContent'
import useForm from '../../../hooks/useForm'
import { Button } from 'react-bootstrap'
import ManageProductService from '../../../services/admin/ManageProductService'
import { createAxiosJwt } from '../../../../createInstance'
import { showToast } from '../../../helper/toast'
import ManageProductAction from '../../../redux/action/admin/ManageProductAction'
import { useDispatch, useSelector } from 'react-redux'

const ProductManagement = () => {
	const { id } = useParams()
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt('admin')
	const [isChangeFile, setIsChangeFile] = useState(false)

	const navigate = useNavigate()

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
	} = useForm(fieldsConfig, { status: '1' })

	const [isLoading, setIsLoading] = useState(false)
	
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
	}, [listCategory])

	const handleCreateProduct = async () => { 
		if (validateForm(dataForm)) {
			setIsLoading(true)
			const response = await ManageProductService.createProduct(axiosJwt, dataForm)
			if (response.success) {
				handleSetDataForm({})
				showToast('success')
			} else if (response.errors) {
				setError(response.errors)
			}
		}
		setIsLoading(false)

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
					<div id="image-preview" className="image-preview">
						<label htmlFor="image-upload" id="image-label">Choose File</label><br />
						<div style={{ width: '200px', padding: '10px 0' }}>
							{dataForm?.img && !id && isChangeFile && <img src={`${URL.createObjectURL(dataForm?.img)}`} alt="" />}
							{dataForm?.img && id && !isChangeFile && <img src={`${dataForm?.img}`} alt="" />}
						</div>
						<input 
							type="file" 
							name="img" 
							onChange={(event) =>{
								setIsChangeFile(true) 
								handleChange(event, 'file')
							}}
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
					<label>Status</label>
					<select 
						name="status" 
						className="form-control input-primary" 
						defaultValue={'1'}
					>
						<option value="1">Active</option>
						<option value="0">Inactive</option>
					</select>
				</div>

				<Button 
					type="button" 
					className="btn btn-second" 
					onClick={() => {
						navigate('/admin/product')
					}}
					variant={'secondary'}
					style={{ marginRight: '10px', minWidth: '96px' }}
				>
					{'Cancel'	}
				</Button>

				<Button 
					type="button" 
					className="btn btn-primary" 
					onClick={handleAction}
					disabled={isDisableBtn || isLoading}
					variant={ isDisableBtn ? 'secondary' : 'primary'}
					style={{ minWidth: '96px' }}

				>
					{isLoading ? 'Loading ...' : infoComponent.btnTitle }	
				</Button>
			</div>
		</WrapperContent>
	)
}

export default ProductManagement
