import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import DataTable from '../../DataTable'
import { useDispatch, useSelector } from 'react-redux'
import DashboardAction from '../../../redux/action/DashboardAction'
import { createAxiosJwt } from '../../../../createInstance'
import PropTypes from 'prop-types'
import moment from 'moment'
import useForm from '../../../hooks/useForm'
import { showToast } from '../../../helper/toast'
import { useReactToPrint } from 'react-to-print'
import OrderPrint from '../Print/OrderPrint'

const OPTION_STATUS_PAYMENT = {
	pending: 1,
	in_process: 2,
	completed: 3
}

const OrderDetail = () => {
	const { id } = useParams()
	const axiosJwt = createAxiosJwt('admin')
	const dispatch = useDispatch()
  
	const { listOrderItem = [], currentOrder = {} } = useSelector((state) => state.dashboardReducer)

	useEffect(() => {
		dispatch(DashboardAction.getListOrderItem(axiosJwt, id))
		dispatch(DashboardAction.getOrder(axiosJwt, id))
	}, [])

	const { dataForm, handleBlur, handleChange, handleSetDataForm, error, setError, validateForm, hasDisableBtnSubmit } = useForm({})

	useEffect(() => {
		handleSetDataForm({ ...currentOrder })
	}, [currentOrder])

	let subTotal = 0
	let quantity = 0
	listOrderItem?.forEach((orderItem, index) => {
		subTotal += orderItem.qty * orderItem.price 
		quantity += orderItem.qty
		
	})

	const columns = [
		{
			Header: 'Item',
			accessor: 'product_name'
		},
		{
			Header: 'Price',
			accessor: 'price'
		}, 
		{
			Header: 'Quantity',
			accessor: 'qty'
		},
    
		{
			Header: 'Total',
			type: 'action',
			getComponent: (productId, value, values) => {
				return (
					<span>${values.price * values.qty}</span>
				)
			}
		}
    
	]

	const area = currentOrder.address ? JSON.parse(currentOrder?.address) : {}

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

	const handleUpdateOrder = async () => {
		const data = await axiosJwt.put(`/admin/order/${currentOrder?.id}`, dataForm)

		// to do
		if (data) {
			showToast('success', 'Update success')
		}
		
	}

	const getCustomText = (text) => {
		if (!text) {
			return ''
		}
		return text.split('_').join(' ')
	}

	const componentRef = useRef()
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	})
	
	return (
		<div ref={componentRef} style={{ padding: '20px' }}>
			<div className='fp__invoice admin' >
				<div className="fp__invoice_header">
					<div className="header_address">
						<h4>invoice to</h4>
						<p><b>Name: </b> {getName()}</p>
						<p><b>Phone: </b> {area.phone}</p>

						<h4 style={{ display: 'inline', marginRight: '10px' }}>Payment status:</h4>
						<span style={{ padding: '5px 10px', color: 'black', borderRadius: '10px', textTransform: 'capitalize' }}>{currentOrder?.payment_status}</span>
					</div>
					<div className="header_address">
						<p><b>date:</b> <span>{currentOrder?.createdAt && moment(currentOrder?.createdAt).format('YYYY-MM-DD')}</span></p>
						<h4 style={{ display: 'inline', marginRight: '10px' }}>
              Order status:
						</h4>
						<span style={{ padding: '5px 10px', color: 'black', borderRadius: '10px', textTransform: 'capitalize' }}>
							{getCustomText(currentOrder?.order_status)}
						</span>
					</div>
				</div>
				<div className="fp__invoice_body admin" style={{ marginBottom: '20px', backgroundColor: 'gray' }}>
					<DataTable columns={columns} data={listOrderItem}/>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>

					<div>
						<label>Payment status</label>
						<select 
							name="payment_status" 
							className="form-control"
							defaultValue={'pending'}
							value={dataForm?.payment_status}
							onChange={handleChange}
						>
							<option value="pending">Pending</option>
							<option value="complete">Completed</option>
						</select>
						<br/>
						<label>Order status</label>
						<select 
							name="order_status" 
							className="form-control"
							defaultValue={'pending'}
							value={dataForm?.order_status}
							onChange={handleChange}
						>
							<option value="pending">Pending</option>
							<option value="in_process">In process</option>
							<option value="complete">Complete</option>
						</select>
						<br/>

						<button className='btn btn-primary' onClick={handleUpdateOrder}>Update</button>

					</div>
					<div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
						<span>
							<b>Total: </b> ${subTotal}
						</span>
						<button className='btn btn-primary' onClick={handlePrint}>Print</button>
					</div>
				</div>
			</div>
		</div>

	)
}

OrderDetail.propTypes = {
	item: PropTypes.object 
}

export default OrderDetail
