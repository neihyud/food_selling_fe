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

const Product = () => {
	const navigate = useNavigate()
	const axiosJwt = createAxiosJwt('admin')
	const dispatch = useDispatch()

	const [isShowModal, setIsShowModal] = useState(false)
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
			accessor: 'category_id.name'	
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
	}, [])

	const { listProduct } = useSelector((state) => state.admin.manageProductReducer)

	const handleRemoveProduct = () => {
		dispatch(ManageProductAction.deleteProduct(axiosJwt, currentIdProduct))
		setIsShowModal(false)
	}

	const action = (
		<button className="btn btn-primary" onClick={() => navigate('/admin/product/create')}>
			Create new
		</button>
	)
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
		</WrapperContent>
	)
}

export default Product
