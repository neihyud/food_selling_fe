import CartConstant from '../../constant/CartConstant'
import CartService from '../../services/CartService'
import IndexDBService from '../../services/IndexDbService'

const CartAction = {
	getListCartItem() {
		return async dispatch => {
			const listCartItem = await IndexDBService.getListCartItem('cart')
      
			dispatch(this.getListCartItemSuccess(listCartItem))
		} 
	},
	getListCartItemSuccess(listCartItem) {
		return {
			type: CartConstant.GET_LIST_CART_ITEM_SUCCESS,
			listCartItem
		}
	},
	updateQuantity(data) {
		return async (dispatch) => {
			await	IndexDBService.updateCartItem('cart', data)
			
			dispatch(this.updateQuantitySuccess(data))

		}
	},
	updateQuantitySuccess(data) {
		return {
			type: CartConstant.UPDATE_QUANTITY_CART_SUCCESS,
			data
		}
	},
	removeCartItem(id) {
		return async dispatch => {
			await	IndexDBService.deleteCartItem('cart', id)
			dispatch(this.removeCartItemSuccess(id))
		}
	},
	removeCartItemSuccess(id) {
		return {
			type: CartConstant.REMOVE_CART_ITEM_SUCCESS,
			id
		}
	},
	countCartItem() {
		return async dispatch => {
			const count = await IndexDBService.countCartItem()

			dispatch(this.updateCountCartItem(count))
		}
	},
	updateCountCartItem(count) {
		return {
			type: CartConstant.SET_COUNT_CART_ITEM,
			count
		}
	},
	setInfoCheckout(data, typeAdd = 'part') {
		return {
			type: CartConstant.SET_INFO_CHECKOUT,
			typeAdd,
			data
		}
	},
	handleCheckout(axiosJwt) {
		return async (dispatch, getState) => { 
			const { listCartItem, infoCheckout } = getState().cartReducer 

			const data = await CartService.handleCheckout(axiosJwt, { ...infoCheckout, items: listCartItem })

			window.location = data?.url
			
			return data
		}
	},
	handleCheckoutSuccess(axiosJwt, data) {
		// to do
		return async (dispatch, getState) => {
			const { listCartItem, infoCheckout } = getState().cartReducer

			// const data = await CartService.handleCheckout(axiosJwt, { ...infoCheckout, items: listCartItem })
			const response = await CartService.handleCheckoutSuccess(axiosJwt, data)
			await	IndexDBService.clearData('cart')

			dispatch({
				type: CartConstant.HANDLE_CHECKOUT_SUCCESS
			})

			// return data
		}
	}
	
}

export default CartAction
