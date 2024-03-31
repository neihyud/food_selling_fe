import HomeConstant from '../../constant/HomeConstant'
import { showToast } from '../../helper/toast'
import IndexDBService from '../../services/IndexDbService'
const HomeAction = {
	setIsOpenCartCheckout(isOpenCartCheckout) {
		return {
			type: HomeConstant.SET_IS_OPEN_CART_CHECKOUT,
			isOpenCartCheckout
		}
	},
  
	setIsOpenFoodDetail(isOpenFoodDetail) {
		return {
			type: HomeConstant.SET_IS_OPEN_FOOD_DETAIL,
			isOpenFoodDetail
		}
	},

	addToCart(data) {
		return async dispatch => {
			try {
				await IndexDBService.handleAddProductToCart('cart', data)
				dispatch(this.addToCartSuccess())
			} catch (error) {
				throw new Error(error)
			}
		}
	},

	addToCartSuccess() {
		showToast('success', 'Add product to cart success!', { position: 'top-right' })
		return {
			type: HomeConstant.SET_IS_OPEN_FOOD_DETAIL
		}
	}
}

export default HomeAction
