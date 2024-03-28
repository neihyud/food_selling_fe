import MangeProductConstant from '../../../constant/admin/MangeProductConstant'

const initState = {
	currentData: null,
	listCategory: [],
	listProduct: []
}

const ManageProductReducer = (state = initState, action) => {
	switch (action.type) {
		case MangeProductConstant.GET_CATEGORY_SUCCESS:
			return {
				...state,
				listCategory: action.listCategory
			}
		case MangeProductConstant.DELETE_CATEGORY_SUCCESS:
			const newListDataCategory = state?.listCategory.filter((item) => item.id !== action.id)
			
			return {
				...state,
				listCategory: newListDataCategory
			}
		case MangeProductConstant.GET_PRODUCT_SUCCESS: 
			return {
				...state,
				listProduct: action.listProduct
			}
		case MangeProductConstant.DELETE_PRODUCT_SUCCESS:
			const newListDataProduct = state?.listProduct.filter((item) => item.id !== action.id)
			
			return {
				...state,
				listProduct: newListDataProduct
			}
		
		default:
			return state
	}
}

export default ManageProductReducer
