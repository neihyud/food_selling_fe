import { useNavigate } from 'react-router-dom'
import WrapperContent from '../../WrapperContent'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ManageProductAction from '../../../../redux/action/admin/ManageProductAction'
import { createAxiosJwt } from '../../../../../createInstance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DataTable from '../../../DataTable'
import ModalCustom from '../../../Modal/ModalCustom'
import { toast } from 'react-toastify'
import useFetch from '../../../../hooks/useParseCsv'

const Category = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { listCategory } = useSelector((state) => state.admin.manageProductReducer)
	const { fetchCsvData } = useFetch()
	
	const axiosJwt = createAxiosJwt('admin')
	
	const [isShowModal, setIsShowModal] = useState(false)
	const [currentIdCategory, setCurrentIdCategory] = useState()

	const handleOpenModal = (productId) => {
		setIsShowModal(true)
		setCurrentIdCategory(productId)
	}

	const columns = useMemo(() => {
		return [
			{
				Header: 'Name',
				accessor: 'name'
			},
			{
				Header: 'Description',
				accessor: 'description'
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
								className='animation-icon'
								onClick={() => navigate(`/admin/category/${productId}/edit`)} 
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
	}, []) 

	useEffect(() => {
		dispatch(ManageProductAction.getListCategory(axiosJwt))
	}, [])

	const handleRemoveCategory = () => {
		dispatch(ManageProductAction.deleteCategory(axiosJwt, currentIdCategory))
		setIsShowModal(false)
	}

	const importData = async (data) => {
		const response = await axiosJwt.post('/admin/manage-product/product/many', { data })

		if (response?.data?.success) {
			toast.success('Import data success!')
			dispatch(ManageProductAction.getListCategory(axiosJwt))	
		} else {
			toast.fail('Import data success!')
		}
	} 

	const handleFileUpload = (event) => {
		const file = event.target.files[0]
		if (file && file.type === 'text/csv') {
			fetchCsvData(URL.createObjectURL(file), importData)
		} else {
			toast.error('Please upload a valid CSV file!!')
		}
		
	}
	const btnImport = () => {
		return (
			<>
				<label htmlFor='product' style={{ padding: '7px 12px', background: '#0d6efd', color: 'white', borderRadius: '6px', margin: '0 8px', cursor: 'pointer' }}>Import</label>
				<input type='file' hidden accept=".csv" id="product" onChange={handleFileUpload}/>
			</>
		)
	}
	
	const action = (
		<>
			{btnImport()}
			<button className="btn btn-primary" onClick={() => navigate('/admin/category/create')}>
				Create new
			</button>
		</>
	)
	return (
		<WrapperContent
			title='Product Categories'
			subTitle='All Categories'
			action={action}
		>
			<DataTable columns={columns} data={listCategory} />

			<ModalCustom 
				handleActionPrimary={handleRemoveCategory}
				handleActionSecondary={() => setIsShowModal(false)}
				isShow={isShowModal}
				content={'Do you want remove?'} 
				title={'Remove Category'}
			/>
		</WrapperContent>
	)
}

export default Category
