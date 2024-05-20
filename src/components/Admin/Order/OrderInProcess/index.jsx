import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createAxiosJwt } from '../../../../../createInstance'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import WrapperContent from '../../WrapperContent'
import DataTable from '../../../DataTable'

const OrderInProcess = () => {
	const [listOrder, setListOrder] = useState([]) 
	const navigate = useNavigate()
	const axiosJwt = createAxiosJwt('admin')

	const columns = [
		{
			Header: 'Grand Total',
			accessor: 'sub_total'	
		},
		{
			Header: 'Order Status',
			accessor: 'order_status',
			type: 'action',
			getComponent: (_, value) => {
				return (
					<span>{value.split('_').join(' ')}</span>
				)
			}
		},
		{
			Header: 'Payment Status',
			accessor: 'payment_status'
		},
		{
			Header: 'Created At',
			accessor: 'createdAt',
			type: 'action',
			getComponent: (orderId, value) => {
				return (
					<span>{moment(value).format('YYYY-MM-DD')}</span>
				)
			}
		},
		{
			Header: 'Action',
			accessor: 'action',
			type: 'action',
			getComponent: (orderId) => {
				return (
					<>
						<FontAwesomeIcon 
							icon={faEye} 
							onClick={() => navigate(`/admin/order/${orderId}`)} 
							className='animation-icon'
						/>
			
						<FontAwesomeIcon 
							icon={faTrash} 
							className='animation-icon' 
							// onClick={() => handleOpenModal(orderId)}

						/>
					</>
				)
			}
		}
	]

	useEffect(() => {
		const getListOrder = async () => {
			const response = await axiosJwt.get('/admin/order/in-process')

			setListOrder(response.data)
		} 

		getListOrder()
	}, [])

	return (
		<WrapperContent 
			title='Orders'
			subTitle='In Process Order'
			// action={action}
		>
			<DataTable columns={columns} data={listOrder} />

		</WrapperContent>
	)
}

export default OrderInProcess
