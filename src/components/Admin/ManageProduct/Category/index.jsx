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

const Category = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { listCategory } = useSelector((state) => state.admin.manageProductReducer)
	
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
	
	const action = (
		<button className="btn btn-primary" onClick={() => navigate('/admin/category/create')}>
			Create new
		</button>
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
