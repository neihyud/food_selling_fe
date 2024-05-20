import { faCashRegister, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataTable from '../../DataTable'
import WrapperContent from '../WrapperContent'
import { createAxiosJwt } from '../../../../createInstance'
import moment from 'moment'
import ModalCustom from '../../Modal/ModalCustom'
import { showToast } from '../../../helper/toast'
import useForm from '../../../hooks/useForm'
import { useSelector } from 'react-redux'

const Order = () => {
	const [listOrder, setListOrder] = useState([])  
	const navigate = useNavigate()
	const axiosJwt = createAxiosJwt('admin')

	const [currentOrderId, setCurrentOrderId] = useState()

	const [isShowModal, setIsShowModal] = useState(false)
	const [isShowModalChangeStatus, setIsShowModalChangeStatus] = useState(false)

	const { currentOrder = {} } = useSelector((state) => state.dashboardReducer)

	const { 
		dataForm, 
		handleBlur, 
		handleChange, 
		handleSetDataForm, 
		error, 
		setError, 
		validateForm, 
		hasDisableBtnSubmit 
	} = useForm({})

	useEffect(() => {
		if (currentOrder) {
			handleSetDataForm({ ...currentOrder })
		}
	}, [currentOrder])
	
	const columns = [
		{
			Header: 'Name',
			accessor: 'user_id',
			type: 'action',
			getComponent: (_, _value) => {
				return (
					<span>{ _value?.name.split('_').join(' ')}</span>
				)
			}
		},
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
			getComponent: (orderId, _, values) => {
				const styleCustom = values?.order_status?.toLowerCase() === 'delivered' ? {
					pointerEvents: 'none' 
				} : ''

				return (
					<>
						<FontAwesomeIcon 
							icon={faEye} 
							onClick={() => navigate(`/admin/order/${orderId}`)} 
							className='animation-icon'
						/>

						<FontAwesomeIcon 
							icon={faCashRegister} 
							onClick={() => {
								if (values?.order_status?.toLowerCase() !== 'delivered') {
									setIsShowModalChangeStatus(true)
									setCurrentOrderId(orderId)
								}
							}} 
							className='animation-icon'
							style={styleCustom}

						/>
			
						<FontAwesomeIcon 
							icon={faTrash} 
							className='animation-icon' 
							onClick={() => {
								setIsShowModal(true)
								setCurrentOrderId(orderId)
							}}
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

	const handleCancelOrder = async () => {
		
		const response = await axiosJwt.put(`/admin/order/${currentOrderId}/refund`, {})

		// to do
		if (response.data.success) {
			showToast('success', 'Cancel order success')
		} else {
			showToast('error', 'Cancel order fail!')
		}

		setIsShowModal(false)
	}

	const handleChangeStatus = async () => {
		const data = await axiosJwt.put(`/admin/order/${currentOrderId}`, dataForm)

		// to do
		if (data) {
			showToast('success', 'Update success')
		}
	}

	const renderModalChangeStatus = () => {
		return (
			<>
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
			</>
		)
	}
  
	return (
		<WrapperContent 
			title='Orders'
			subTitle='All Order'
			// action={action}
		>
			<DataTable columns={columns} data={listOrder} />

			<ModalCustom 
				handleActionPrimary={handleChangeStatus}
				handleActionSecondary={() => setIsShowModalChangeStatus(false)}
				isShow={isShowModalChangeStatus}
				content={renderModalChangeStatus()} 
				title={'Change Status'}
			/>

			<ModalCustom 
				handleActionPrimary={handleCancelOrder}
				handleActionSecondary={() => setIsShowModal(false)}
				isShow={isShowModal}
				content={'Do you want cancel this order?'} 
				title={'Cancel Order'}
			/>
		</WrapperContent>
		
	)
}

export default Order  
