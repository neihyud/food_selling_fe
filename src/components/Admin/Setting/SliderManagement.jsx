import { useEffect, useMemo, useState } from 'react'
import WrapperContent from '../WrapperContent'
import { useNavigate, useParams } from 'react-router-dom'
import useForm from '../../../hooks/useForm'
import { createAxiosJwt } from '../../../../createInstance'
import { showToast } from '../../../helper/toast'
import { Button } from 'react-bootstrap'

const SliderManagement = () => {
	const { id } = useParams()
	const [isChangeFile, setIsChangeFile] = useState(false)
	const axiosJwt = createAxiosJwt('admin')
	const navigate = useNavigate()

	const infoComponent = useMemo(() => {
		if (id) {
			return {
				title: 'Edit Slider',
				btnTitle: 'Edit'
			}
		}

		return {
			title: 'Create Slider',
			btnTitle: 'Create'
		}
	}, [id])

	const fieldsConfig = {
		offer: {
			validates: [
				(value) => {
					if (value) {
						return ''
					}

					return 'Field is required'
				}
			]
		},
		title: {
			validates: [
				(value) => {
					if (value) {
						return ''
					}

					return 'Field is required'
				}
			]
		},
		sub_title: {
			validates: [
				(value) => {
					if (value) {
						return ''
					}

					return 'Field is required'
				}
			]
		},
		short_description: {
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

	const getCurrentSlider = async () => {
		// const response = await ManageProductService.getProduct(axiosJwt, id)
		const response = await axiosJwt.get(`/admin/setting/slider/${id}`)

		handleSetDataForm({
			...response.data 
		})

	}

	useEffect(() => {
		if (id) {
			// to do load current product
			getCurrentSlider()
		}

	}, [])

	const handleCreateProduct = async () => { 
		if (validateForm(dataForm)) {
			setIsLoading(true)
			const response = await axiosJwt.post('/admin/setting/slider', dataForm, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			if (response?.data?.success) {
				handleSetDataForm({})
				showToast('success')
				navigate('/admin/setting/slider')
			} else if (response.errors) {
				setError(response.errors)
				setIsLoading(false)
				navigate('/admin/setting/slider')
			}
		}
		setIsLoading(false)

	}

	const handleUpdateProduct = async () => {
		if (validateForm(dataForm)) {
			if (!isChangeFile) {
				delete dataForm.img
			}
			const response = await axiosJwt.put(`/admin/setting/slider/${id}`, dataForm, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			if (response?.data?.success) {
				showToast('success')
				navigate('/admin/setting/slider')
				
			} else if (response.errors) {
				setError(response.errors)
				navigate('/admin/setting/slider')
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

	const isDisableBtn = hasDisableBtnSubmit()		
  
	return (
		<WrapperContent
			title='Slider'
			subTitle={infoComponent.title}
		>
			<div>
				<div className="form-group">
					<div id="image-preview" className="image-preview">
						{/* <label htmlFor="image-upload" >Choose File</label><br /> */}
						<div style={{ width: '200px', padding: '10px 0' }}>
							{dataForm?.img && isChangeFile && <img src={`${URL.createObjectURL(dataForm?.img)}`} alt="" />}
							{dataForm?.img && !isChangeFile && <img src={`${dataForm?.img}`} alt="" />}
						</div>
						<label htmlFor="image-upload" 
							style={{ 
								padding: '7px 12px', 
								background: '#3a83f0', 
								color: 'white', 
								borderRadius: '6px', 
								cursor: 'pointer', 
								width: '120px'
							}}
						>Choose File</label>
						<input 
							type="file" 
							name="img" 
							onChange={(event) =>{
								setIsChangeFile(true) 
								handleChange(event, 'file')
							}}
							id="image-upload"
							hidden
						/>
					</div>
					<span className="form-message">{error?.image}</span>
        
				</div>
              
				<div className="form-group">
					<label>Offer</label>
					<input 
						type="text" 
						name="offer" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm.offer || ''}
					/>
					<span className="form-message">{error?.offer}</span>

				</div>
				<div className="form-group">
					<label>Title</label>
					<input 
						type="text" 
						name="title" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.title || ''}
					/>
					<span className="form-message">{error?.title}</span>

				</div>

				<div className="form-group">
					<label>Sub Title</label>
					<input 
						type="text" 
						name="sub_title" 
						className="form-control input-primary" 
						onChange={handleChange}
						onBlur={handleBlur}
						value={dataForm?.sub_title || ''}
					/>
					<span className="form-message">{error?.sub_title}</span>

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
					<span className="form-message">{error?.short_description}</span>

				</div>

				<Button 
					type="button" 
					className="btn btn-primary" 
					onClick={handleAction}
					disabled={isDisableBtn || isLoading}
					variant={ isDisableBtn ? 'secondary' : 'primary'}
				>
					{isLoading ? 'Loading ...' : infoComponent.btnTitle }	
				</Button>
			</div>
		</WrapperContent>
	)
}

export default SliderManagement
