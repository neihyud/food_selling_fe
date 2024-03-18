import OrderDetail from './OrderDetail'
import './order.css'

const Order = () => {

	const listOrder = [{
		id: '1',
		date: '22',
		status: 'complete',
		price: '5'
	}]

	const renderOrder = listOrder.map((item, index) => {
		return (
			<tr key={index}>
				<td>
					<h5>{item.id}</h5>
				</td>
				<td>
					<p>{item.date}</p>
				</td>
				<td>
					<span className={item.status}>{item.status}</span>
				</td>
				<td>
					<h5>${item.price}</h5>
				</td>
				<td><a className="view_invoice">View Details</a></td>
			</tr>
		)
	})
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

			<OrderDetail />
		</div>
	)
}

export default Order
