import CartConstant from '../../constant/CartConstant'

const initState = {
	listCartItem: []
}

const CartReducer = (state = initState, action) => {
	switch (action.type) {
		case CartConstant.GET_LIST_CART_ITEM_SUCCESS:
			return {
				...state,
				listCartItem: action.listCartItem
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
				listCartItem: newListCartItem
			}
		case CartConstant.REMOVE_CART_ITEM_SUCCESS:
			const newCartAfterRemove = state.listCartItem.filter((item) => item.id !== action.id)
			
			return {
				...state,
				listCartItem: newCartAfterRemove
			}
		default:
			return state
	}
}

export default CartReducer
