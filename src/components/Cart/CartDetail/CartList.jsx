import { useDispatch, useSelector } from 'react-redux'
import CartItemList from './CartItemList'
import { useEffect } from 'react'
import CartAction from '../../../redux/action/CartAction'

const CartList = () => {
	const dispatch = useDispatch()
	
	const { listCartItem } = useSelector((state) => state.cartReducer)

	console.log('listCartItem == ', listCartItem)

	useEffect(() => {
		if (listCartItem.length) {
			return undefined
		}
		
		dispatch(CartAction.getListCartItem())
	}, [])
	const totalItem = listCartItem.length !== 0 ? listCartItem.length.toString().padStart(2, '0') : 0 

	const renderList = () => {
		if (!totalItem) {
			return <h3 className='center' style={{ height: '95%' }}>Cart Empty</h3>
		}

		if (!Array.isArray(listCartItem)) {
			return undefined
		}

		return listCartItem.map((item, index) => {
			return <CartItemList key={index} {...item} />
		})
	}
	return (
		<div className="table-responsive">
			<table className="table fp__cart_list">
				<thead>
					<tr className="text-center">
						<th scope="col" className="th-left border-0 bg-light">
							<div className="p-2 text-uppercase">Image</div>
						</th>
						<th scope="col" className="th-left border-0 bg-light">
							<div className="p-2 text-uppercase">Name</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Price</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Quantity</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Total</div>
						</th>
						<th scope="col" className="border-0 bg-light">
							<div className="py-2 text-uppercase">Remove</div>
						</th>
					</tr>
				</thead>
				<tbody>
					{renderList()}
				</tbody>
			</table>
		</div>
	)
}

export default CartList
