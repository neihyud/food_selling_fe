import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartAction from '../../redux/action/CartAction'
import { useDispatch } from 'react-redux'
import LocalStorageService from '../../services/LocalStorageService'
import { createAxiosJwt } from '../../../createInstance'

const OrderStatus = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const axiosJwt = createAxiosJwt()
	
	useEffect(() => {
		const params = new URLSearchParams(window.location.search)
		
		if (!params.has('session_id')) {
			return undefined
		}

		const session_id = params.get('session_id')
		if (LocalStorageService.getSessionIdQuery() === session_id) { 
			return undefined
		}
		
		LocalStorageService.setSessionIdQuery(params.get('session_id'))

		const data = {
			session_id,
			order_id: params.get('order_id')
		}
		
		dispatch(CartAction.handleCheckoutSuccess(axiosJwt, data))
		
	}, [])

	return (
		<>	
			<div className='' style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)' 
			}}>
				<div>Order Success !!!</div>
				<button
					onClick={() => navigate('/')}
					className='common_btn'
				>
					Back to dashboard
				</button>
			</div>
		</>

	)
}

export default OrderStatus
