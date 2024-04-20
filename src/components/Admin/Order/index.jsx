import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../DataTable'
import WrapperContent from '../WrapperContent'
import { createAxiosJwt } from '../../../../createInstance'

const Order = () => {
	const [listOrder, setListOrder] = useState([])  
	const navigate = useNavigate()
	const axiosJwt = createAxiosJwt('admin')
	const columns = [
		{
			Header: 'Username',
			accessor: 'username'
		},
		{
			Header: 'Grand Total',
			accessor: 'grand_total'	
		},
		{
			Header: 'Order Status',
			accessor: 'order_status'
		},
		{
			Header: 'Payment Status',
			accessor: 'payment_status'
		},
		{
			Header: 'Created At',
			accessor: 'created_at'
		},
		{
			Header: 'Action',
			accessor: 'action',
			id: 'action',
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
							// onClick={() => handleOpenModal(productId)}

						/>
					</>
				)
			}
		}
	]

	useEffect(() => {
		const getListOrder = async () => {
			const response = await axiosJwt.get('/admin/order')

			setListOrder(response.data)
		} 

		getListOrder()
	}, [])
  
	return (
		<WrapperContent 
			title='Orders'
			subTitle='All Order'
			// action={action}
		>
			<DataTable columns={columns} data={listOrder} />
		</WrapperContent>
		
	)
}

export default Order  
