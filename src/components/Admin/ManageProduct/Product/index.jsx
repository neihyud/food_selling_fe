import { useNavigate } from 'react-router-dom'
import '../manageProduct.css'
import WrapperContent from '../../WrapperContent'
import DataTable from '../../../DataTable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { createAxiosJwt } from '../../../../../createInstance'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import ManageProductAction from '../../../../redux/action/admin/ManageProductAction'
import ModalCustom from '../../../Modal/ModalCustom'
import useFetch from '../../../../hooks/useParseCsv'
import { toast } from 'react-toastify'
import useForm from '../../../../hooks/useForm'

const Product = () => {
	const navigate = useNavigate()
	const axiosJwt = createAxiosJwt('admin')
	const dispatch = useDispatch()

	const { fetchCsvData } = useFetch()

	const [isShowModal, setIsShowModal] = useState(false)
	const [isShowImport, setIsShowImport] = useState(false)
	const [currentIdProduct, setCurrentIdProduct] = useState()

	const handleOpenModal = (productId) => {
		setIsShowModal(true)
		setCurrentIdProduct(productId)
	}

	const columns = [
		{
			Header: 'Image',
			accessor: 'thumb_img',
			type: 'image'
		},
		{
			Header: 'Name',
			accessor: 'name'
		},
		{
			Header: 'Category',
			accessor: 'category.name'	
		},
		{
			Header: 'Price',
			accessor: 'price'
		},
		{
			Header: 'Offer Price',
			accessor: 'offer_price'
		},
		{
			Header: 'Status',
			accessor: 'status',
			type: 'action',
			getComponent: (productId, value) => {
				const content = Number(value) === 1 ? 'Active' : 'Inactive'
				return (
					<span>{content}</span>
				)
			}
		},
		{
			Header: 'Action',
			accessor: 'action',
			type: 'action',
			getComponent: (productId) => {
				return (
					<>
						<FontAwesomeIcon 
							icon={faEdit} 
							onClick={() => navigate(`/admin/product/${productId}/edit`)} 
							className='animation-icon'
						/>
			
						<FontAwesomeIcon 
							icon={faTrash} 
							className='animation-icon' 
							onClick={() => handleOpenModal(productId)}

						/>
					</>
				)
			}
		}
	]
	
	useEffect(() => {
		dispatch(ManageProductAction.getListProduct(axiosJwt))
		dispatch(ManageProductAction.getListCategory(axiosJwt))

	}, [])

	const { 
		dataForm, 
		handleBlur, 
		handleChange, 
		handleSetDataForm, 
		error, 
		setError, 
		validateForm, 
		hasDisableBtnSubmit 
	} = useForm([], { status: '1' })

	const { listProduct, listCategory } = useSelector((state) => state.admin.manageProductReducer)

	const handleRemoveProduct = () => {
		dispatch(ManageProductAction.deleteProduct(axiosJwt, currentIdProduct))
		setIsShowModal(false)
	}

	const importData = async (data) => {
		// to do category
		const response = await axiosJwt.post('/admin/manage-product/product/many/?type=product', { data })

		if (response?.data?.success) {
			toast.success('Import data success!')
			dispatch(ManageProductAction.getListProduct(axiosJwt))
			setIsShowImport(false)
		} else {
			toast.fail('Import data success!')
		}
	} 

	const [fileChooseImport, setFileChooseImport] = useState()

	const handleChooseFile = (event) => {
		const file = event.target.files[0]

		if (file && file.type === 'text/csv') {
			setFileChooseImport(file)
		} else {
			toast.error('Please upload a valid CSV file!!')
		}
	}

	const handleFileUpload = () => {
		fetchCsvData(URL.createObjectURL(fileChooseImport), importData, { category_id: dataForm?.category_id })
	}

	const btnImport = () => {
		return (
			<>
				<label
					style={{
						padding: '7px 12px', 
						background: '#0d6efd', 
						color: 'white', 
						borderRadius: '6px', 
						margin: '0 8px', 
						cursor: 'pointer' 
					}} onClick={() => setIsShowImport(true)}>
						Import
				</label>

			</>
		)
	}

	const action = (
		<>
			{btnImport()}
			<button className="btn btn-primary" onClick={() => navigate('/admin/product/create')}>
				Create new
			</button>
		
		</>
	)

	useEffect(() => {		
		handleSetDataForm({
			...dataForm,
			category_id: listCategory && listCategory[0]?.id
		})

		return () => {}
	}, [listCategory])

	const bodyModalImport = () => {
		return (
			<>
				<label htmlFor="">Choose Category</label>
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

				<input type='file' accept=".csv" id="product" onChange={handleChooseFile} style={{ marginTop: '20px' }}/>
			</>
		)
	}

	return (
		<WrapperContent 
			title='Products'
			subTitle='All Products'
			action={action}
		>
			<DataTable columns={columns} data={listProduct} />

			<ModalCustom 
				handleActionPrimary={handleRemoveProduct}
				handleActionSecondary={() => setIsShowModal(false)}
				isShow={isShowModal}
				content={'Do you want remove?'} 
				title={'Remove Category'}
			/>

			<ModalCustom 
				handleActionPrimary={handleFileUpload}
				handleActionSecondary={() => setIsShowImport(false)}
				isShow={isShowImport}
				content={bodyModalImport()} 
				title={'Import Product'}
				isDisablePrimaryAction={!fileChooseImport}
			/>
		</WrapperContent>
	)
}

export default Product
