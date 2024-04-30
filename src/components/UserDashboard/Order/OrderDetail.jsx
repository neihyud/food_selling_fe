import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardAction from '../../../redux/action/DashboardAction'
import { createAxiosJwt } from '../../../../createInstance'
import moment from 'moment'
import { useReactToPrint } from 'react-to-print'

const OrderDetail = (props) => {
	const { item, handleCloseOrder } = props
	const dispatch = useDispatch()
	const { listOrderItem } = useSelector((state) => state.dashboardReducer)

	useEffect(() => {
		dispatch(DashboardAction.getListOrderItem(createAxiosJwt(), item.id))
	}, [])

	let subTotal = 0
	let quantity = 0
	const renderItem = listOrderItem?.map((orderItem, index) => {
		subTotal += orderItem.qty * orderItem.price 
		quantity += orderItem.qty
		return (
			<tr key={index}>
				<td className="sl_no">{index}</td>
				<td className="package">
					<span className="">{orderItem.product_name}</span>
				</td>
				<td className="price">
					<b>${orderItem.price}</b>
				</td>
				<td className="qnty">
					<b>{orderItem.qty}</b>
				</td>
				<td className="total">
					<b>${orderItem.qty * orderItem.price}</b>
				</td>
			</tr>
		)
	})

	const area = JSON.parse(item.address)

	const getName = () => {
		let name = ''
		if (area.firs_name) {
			name += area.last_name
		}

		if (area.last_name) {
			name += ' ' + area.last_name
		}

		return name.trim()
	}

	const componentRef = useRef()
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	})

	return (
		<div style={{ padding: '20px' }} ref={componentRef}>
			<div className="fp__invoice" >
				{/* <a className="go_back"><i className="fas fa-long-arrow-alt-left"></i> go back</a> */}
				{/* <div className="fp__track_order">
	        <ul>
	          <li className="active">order pending</li>
	          <li>order accept</li>
	          <li>order process</li>
	          <li>on the way</li>
	          <li>Completed</li>
	        </ul>
	      </div> */}
				<div className="fp__invoice_header">
					<div className="header_address">
						<h4>invoice to</h4>
						<p>{getName()}</p>
						<p>{area.phone}</p>
					</div>
					<div className="header_address" >
						<p ><b>invoice: </b><span>123</span></p>
						<p><b>date:</b> <span>{item?.createdAt && moment(item?.createdAt).format('YYYY-MM-DD')}</span></p>
					</div>
				</div>
				<div className="fp__invoice_body">
					<div className="table-responsive">
						<table className="table table-striped">
							<thead>
								<tr className="border_none">
									<th className="sl_no">STT</th>
									<th className="package">item name</th>
									<th className="price">Price</th>
									<th className="qnty">Quantity</th>
									<th className="total">Total</th>
								</tr>
							</thead>
							<tbody>
								{renderItem}
							</tbody>
	
							<tfoot>
								{/* <tr>
									<td className="package coupon" colSpan="3">
										<b>(-) Discount coupon</b>
									</td>
									<td className="qnty">
										<b></b>
									</td>
									<td className="total coupon">
										<b>$0.00</b>
									</td>
								</tr> */}
								<tr>
									<td className="package" colSpan="3">
										<b>Total Paid</b>
									</td>
									<td className="qnty">
										<b></b>
									</td>
									<td className="total">
										<b>${subTotal}</b>
									</td>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
				<div>
					<button className="common_btn" onClick={handlePrint}>
						<FontAwesomeIcon icon={faPrint} />
						&nbsp;
						print PDF
					</button>
					<button 
						className='common_btn' 
						style={{ marginRight: '20px' }} 
						onClick={handleCloseOrder}
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	)
}

OrderDetail.propTypes = {
	handleCloseOrder: PropTypes.func,
	item: PropTypes.object 
}

export default OrderDetail
