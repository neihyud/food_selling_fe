import HomeConstant from '../../constant/HomeConstant'
import { showToast } from '../../helper/toast'
import HomeService from '../../services/HomeService'
import IndexDBService from '../../services/IndexDbService'
import CartAction from './CartAction'

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
				const result = await IndexDBService.handleAddProductToCart('cart', data) || 0

				dispatch(this.addToCartSuccess())
				dispatch(CartAction.updateCountCartItem(result))
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
	},
	getProductByCategoryId(axiosJwt, categoryId) {
		return async dispatch => {
			const response = await HomeService.getProductByCategoryId(axiosJwt, categoryId)
			
			dispatch(this.getListProductSuccess(response.data))
		}
	},
	getListCategory(axiosJwt) {
		return async dispatch => {
			const data = await HomeService.getListCategory(axiosJwt)
			dispatch(this.getListCategorySuccess(data))
		}	
	},
	/**
	 * get category success
	 * @returns 
	 */
	getListCategorySuccess(data) {
		return {
			type: HomeConstant.GET_LIST_CATEGORY_SUCCESS,
			listCategory: data
		}
	},
	getListProduct(axiosJwt) {
		return async dispatch => {
			const data = await HomeService.getListProduct(axiosJwt)
			dispatch(this.getListProductSuccess(data))
		}	
	},
	getListProductSuccess(data) {
		return {
			type: HomeConstant.GET_LIST_PRODUCT_SUCCESS,
			listProduct: data
		}
	},
	searchFood(axiosJwt, dataForm) {
		return async dispatch => {
			const data = await HomeService.getListProduct(axiosJwt, dataForm)

			console.log('Data search =================== ', data)
			dispatch(this.getListProductSuccess(data))

		}
	}
	
}

export default HomeAction
