import { useEffect, useState } from 'react'
import OrderDetail from './OrderDetail'
import './order.css'
import { useDispatch, useSelector } from 'react-redux'
import { createAxiosJwt } from '../../../../createInstance'
import DashboardAction from '../../../redux/action/DashboardAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment/moment'

const Order = () => {
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()

	const { listOrder } = useSelector(state => state.dashboardReducer)
	const [currentOrder, setCurrentOrder] = useState()

	useEffect(() => {
		dispatch(DashboardAction.getListOrder(axiosJwt))
	}, [])

	const renderOrder = listOrder.map((item, index) => {
		return (
			<tr key={index}>
				<td>
					<h5>{index}</h5>
				</td>
				<td>
					<p>{item?.createdAt && moment(item?.createdAt).format('YYYY-MM-DD')}</p>
				</td>
				<td>
					<span className={item.status}>{item.order_status}</span>
				</td>
				<td>
					<h5>${item.sub_total}</h5>
				</td>
				<td>		
					<FontAwesomeIcon 
						icon={faEye}
						onClick={() => setCurrentOrder(item)}
					/>
				</td>
			</tr>
		)
	})

	const handleCloseOrder = () => {
		setCurrentOrder(false)
	}

	if (currentOrder) {
		return <OrderDetail item={currentOrder} handleCloseOrder={handleCloseOrder}/>
	}
	
	return (
		<div className="fp_dashboard_body">
			<h3>order list</h3>
			<div className="fp_dashboard_order">
				<div className="table-responsive">
					<table className="table">
						<tbody>
							<tr className="t_header">
								<th>Order</th>
								<th>Date</th>
								<th>Status</th>
								<th>Amount</th>
								<th>Action</th>
							</tr>
							{renderOrder}
						</tbody>
					</table>
				</div>
			</div>

			{/* <OrderDetail /> */}
		</div>
	)
}

export default Order
