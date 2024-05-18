import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './dashboard.css'
import { faDollar, faEye, faStar as faStarBold, faStarHalfAlt, faTrash, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { createAxiosJwt } from '../../../../createInstance'
import moment from 'moment'
import DataTable from '../../DataTable'
import WrapperContent from '../WrapperContent'
import DashboardConstant from '../../../constant/DashboardConstant'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { Pie } from 'react-chartjs-2'

import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

// Register necessary components with Chart.js
Chart.register(ArcElement, Tooltip, Legend)

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

	const [topRateProduct, setTopRateProduct] = useState([])
	const [topPopularProduct, setTopPopularProduct] = useState([])

	const [infoDashboard, setInfoDashboard] = useState()
	const [statusOrder, setStatusOrder] = useState()
	
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

	const getTopRateProduct = async () => {
		const response = await axiosJwt.get('/common/top-rate-product')

		setTopRateProduct(response?.data?.data || [])
	}

	const getTopPopularProduct = async () => {
		const response = await axiosJwt.get('/common/top-popular-product')

		setTopPopularProduct(response?.data?.data || [])
		
	}

	const totalProduct = async () => {
		const response = await axiosJwt.get('/admin/order/dashboard')

		setInfoDashboard(response.data)
	}

	const allStatusOrder = async () => {
		const response = await axiosJwt.get('/admin/order/dashboard/status')

		setStatusOrder(response.data)
	}

	useEffect(() => {
		const getListOrder = async () => {
			const response = await axiosJwt.get('/admin/order/today')

			setListOrder(response.data)
		} 

		getListOrder()
		getTopRateProduct()
		getTopPopularProduct()
		totalProduct()
		allStatusOrder()
	}, [])

	const renderRate = (average_rating) => {
		return new Array(5).fill(0).map((_, index) => {
			if (average_rating && average_rating > index && average_rating < index + 1) {
				return	(<FontAwesomeIcon icon={faStarHalfAlt} key={index} />)
			}
			
			if (average_rating && average_rating >= (index + 1)) {
				return	(<FontAwesomeIcon icon={faStarBold} key={index} />)
			}

			return (<FontAwesomeIcon icon={faStar} key={index} />)
		})
	}

	const renderTopRateProduct = () => {
		const topRateProductV2 = topRateProduct || []
		return topRateProductV2?.map((data, index) => {
			const product = data?.productInfo[0] || {}

			return (
				<div className='' style={{ display: 'flex' }} key={index}>
					<div style={{ overflow: 'hidden', borderRadius: '50%', width: '50px', height: '50px', margin: '8px' }}>	
						<img src={product?.thumb_img || DashboardConstant.IMG_USER_DEFAULT} alt="" />
					</div>
					<div>
						<p>
							{product?.name} 
							<span className='price'>${product?.offer_price}
								<del style={{ fontSize: '15px', marginLeft: '5px', color: 'gray' }} >${product?.price}</del>
							</span>
						</p>

						<div className='rating'>	{renderRate(data?.averageRating || 0)}</div>
					</div>
				</div>
			)
		})
	}

	const renderPopularProduct = () => {
		const topPopularProductV2 = topPopularProduct || []
		return topPopularProductV2?.map((data, index) => {
			const product = data?.productDetails || {}

			return (
				<div className='' style={{ display: 'flex' }} key={index}>
					<div style={{ overflow: 'hidden', borderRadius: '50%', width: '50px', height: '50px', margin: '8px' }}>	
						<img src={product?.thumb_img || DashboardConstant.IMG_USER_DEFAULT} alt="" />
					</div>
					<div>
						<p>
							{product?.name} 
						</p>
						<span className='price' style={{ margin: 0 }}>${product?.offer_price}
							<del style={{ fontSize: '15px', marginLeft: '5px', color: 'gray' }} >${product?.price}</del>
						</span>
					</div>
				</div>
			)
		})
	}

	const data = {
		labels: ['Success', 'In Process', 'Delivered', 'Declined'],
		datasets: [
			{
				label: 'Order Status',
				data: [statusOrder?.orderCountSuccess, statusOrder?.orderCountInProcess, statusOrder?.orderCountDelivered, statusOrder?.orderCountDeclined],
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(255, 99, 132, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)'
				],
				borderWidth: 1
			}
		]
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: 'bottom'
			},
			title: {
				display: true,
				text: 'Order Status'
			}
		}
	}

	return (
		<div className="main-content">
			<section className="section">
				<div className="section-header">
					<h1>Dashboard</h1>
				</div>
				<div className="row">
					<>
						{infoComponent('Total Earn', `${infoDashboard?.earnCount} đ`, faDollar, 'bg-danger')}
						{infoComponent('Total Order', infoDashboard?.orderCount, faUser)}
						{infoComponent('Total User', infoDashboard?.userCount, faUser)}
					</>
					{/* {infoComponent('Total Earn', '10', faDollar, 'bg-danger')} */}
					<div >
						
					</div>
				</div>

				<div className="row">
					<div className="col-lg-9 col-md-9 col-sm-9 col-12" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<div style={{ width: '600px', height: '600px', padding: '80px 0' }}>
							<Pie
								data={data}
								options={options}
							/>
						</div>
					</div>
					<div className="col-lg-3 col-md-3 col-sm-3 col-12">
						<div className='column'>
							<div>
								<WrapperContent
									subTitle='Popular Products'
									// action={action}
								>
									{/* <DataTable columns={columns} data={listOrder} /> */}
									{renderPopularProduct()}
									
								</WrapperContent>

								<WrapperContent
									subTitle='Highly Rated Products'
									// action={action}
								>
									{/* <DataTable columns={columns} data={listOrder} /> */}
									{renderTopRateProduct()}

								</WrapperContent>
							</div>
						</div>
					</div>
					{/* {infoComponent('Total Earn', '10', faDollar, 'bg-danger')} */}

				</div>
				{/* <WrapperContent
					subTitle='Today orders'
					// action={action}
				>
					<DataTable columns={columns} data={listOrder} />
				</WrapperContent> */}
			</section>
		</div>
	)
}

export default Dashboard
 
