import HomeConstant from '../../constant/HomeConstant'

const initState = {
	isOpenCartCheckout: null,
	isOpenFoodDetail: null,
	foodDetail: null,
	listCategory: [],
	listProduct: []
}

const HomeReducer = (state = initState, action) => {
	switch (action.type) {
		case HomeConstant.SET_IS_OPEN_CART_CHECKOUT:
			return {
				...state,
				isOpenCartCheckout: action.isOpenCartCheckout
			}
		case HomeConstant.SET_IS_OPEN_FOOD_DETAIL:
			return {
				...state,
				isOpenFoodDetail: action.isOpenFoodDetail
			}
		case HomeConstant.GET_LIST_CATEGORY_SUCCESS:
			return {
				...state,
				listCategory: action.listCategory
			}
		case HomeConstant.GET_LIST_PRODUCT_SUCCESS: 
			return {
				...state,
				listProduct: action.listProduct
			}
		default:
			return state
	}
}

export default HomeReducer
