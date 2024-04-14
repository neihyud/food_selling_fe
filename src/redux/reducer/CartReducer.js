import CartConstant from '../../constant/CartConstant'

const initState = {
	listCartItem: [],
	countCartItem: 0,
	infoCheckout: {}
}

const CartReducer = (state = initState, action) => {
	switch (action.type) {
		case CartConstant.GET_LIST_CART_ITEM_SUCCESS:
			return {
				...state,
				listCartItem: action.listCartItem,
				countCartItem: action.listCartItem.length
			}
		case CartConstant.UPDATE_QUANTITY_CART_SUCCESS:

			const newListCartItem = state.listCartItem.map((item) => {
				if (item.id === action.data.id) {
					return { ...item, ...action.data }
				}
				return item
			})
		
			return {
				...state,
				listCartItem: newListCartItem,
				countCartItem: newListCartItem.length

			}
		case CartConstant.REMOVE_CART_ITEM_SUCCESS:
			const newCartAfterRemove = state.listCartItem.filter((item) => item.id !== action.id)
			
			return {
				...state,
				listCartItem: newCartAfterRemove,
				countCartItem: newCartAfterRemove.length
			}
		case CartConstant.SET_COUNT_CART_ITEM:
			return {
				...state,
				countCartItem: action.count
			}
		case CartConstant.SET_INFO_CHECKOUT:
			let newInfoCheckout = {}
			switch (action.typeAdd) {
				case 'all':
					newInfoCheckout = action.data
					break
				default:
					newInfoCheckout = {
						...state.infoCheckout,
						...action.data
					}
			}

			return {
				...state,
				infoCheckout: newInfoCheckout
			}
		case CartConstant.HANDLE_CHECKOUT_SUCCESS: 
			return {
				...state,
				countCartItem: 0
			}
		default:
			return state
	}
}

export default CartReducer
