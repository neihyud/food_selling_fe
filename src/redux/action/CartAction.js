import CartConstant from '../../constant/CartConstant'
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
	}
	
}

export default CartAction
