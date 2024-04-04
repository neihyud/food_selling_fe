import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CartAction from '../../redux/action/CartAction'
import { useDispatch } from 'react-redux'
import LocalStorageService from '../../services/LocalStorageService'

const OrderStatus = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
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
		
		dispatch(CartAction.handleCheckoutSuccess())
		
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>	
			<div>OrderStatus</div>
			<button
				onClick={() => navigate('/')}
				className='common_btn'
			>
          Back to dashboard
			</button>
		</>

	)
}

export default OrderStatus
