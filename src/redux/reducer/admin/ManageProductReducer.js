import MangeProductConstant from '../../../constant/admin/MangeProductConstant'

const initState = {
	currentData: null
}

const ManageProductReducer = (state = initState, action) => {
	switch (action.type) {
		case MangeProductConstant.SET_DATA:
			return {
				...state,
				credentials: action.credentials
			}
		default:
			return state
	}
}

export default ManageProductReducer
