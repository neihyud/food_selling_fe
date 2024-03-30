import AccountConstant from '../../../constant/admin/AccountConstant'

const initState = {
	listStaff: []
}

const AccountReducer = (state = initState, action) => {
	switch (action.type) {
		case AccountConstant.GET_STAFF_SUCCESS:
			return {
				...state,
				listStaff: action.listStaff
			}
		case AccountConstant.DELETE_ACCOUNT_SUCCESS:
			const newListDataStaff = state?.listStaff.filter((item) => item.id !== action.id)
			
			return {
				...state,
				listStaff: newListDataStaff
			}
		default:
			return state
	}
} 

export default AccountReducer
