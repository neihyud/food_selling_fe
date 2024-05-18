import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dashboard.css'
import { faDollar, faEye, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createAxiosJwt } from '../../../../createInstance'
import moment from 'moment'
import DataTable from '../../DataTable'
import WrapperContent from '../WrapperContent'

const infoComponent = (title, content, icon, bg = 'bg-primary') => {
	return (
		<div className="col-lg-3 col-md-6 col-sm-6 col-12">
			<div className="card card-statistic-1">
				<div className={`card-icon ${bg}`}>
					<i className="far fa-user"></i>
					<FontAwesomeIcon icon={icon} />
				</div>
				<div className="card-wrap">
					<div className="card-header">
						<h4>{title}</h4>
					</div>
					<div className="card-body">
						{content}
					</div>
				</div>
			</div>
		</div>
	)
}

const Dashboard = () => {

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
			const response = await axiosJwt.get('/admin/order/today')

			setListOrder(response.data)
		} 

		getListOrder()
	}, [])

	return (
		<div className="main-content">
			<section className="section">
				<div className="section-header">
					<h1>Dashboard</h1>
				</div>
				<div className="row">
					{infoComponent('Today Order', '10', faUser)}
					{infoComponent('Total Earn', '10', faDollar, 'bg-danger')}
					{infoComponent('Today Order', '10', faUser)}
					{infoComponent('Total Earn', '10', faDollar, 'bg-danger')}

				</div>
				<WrapperContent
					subTitle='Today orders'
					// action={action}
				>
					<DataTable columns={columns} data={listOrder} />
				</WrapperContent>
			</section>
		</div>
	)
}

export default Dashboard
