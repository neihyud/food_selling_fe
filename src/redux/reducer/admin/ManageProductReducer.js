import MangeProductConstant from '../../../constant/admin/MangeProductConstant'

const initState = {
	currentData: null,
	listData: []
}

const ManageProductReducer = (state = initState, action) => {
	switch (action.type) {
		case MangeProductConstant.GET_CATEGORY_SUCCESS:
			return {
				...state,
				listData: action.listData
			}
		case MangeProductConstant.DELETE_CATEGORY_SUCCESS:
			const newListData = state?.listData.filter((item) => item.id !== action.id)
			
			return {
				...state,
				listData: newListData
			}
		
		default:
			return state
	}
}

export default ManageProductReducer
