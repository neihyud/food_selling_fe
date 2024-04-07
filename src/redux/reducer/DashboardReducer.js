import DashboardConstant from '../../constant/DashboardConstant'

const initState = {
	typeContentComponent: '',
	listAddress: [],
	infoUser: null,
	isEdit: false,
	typeUIAddress: '',
	currentAddress: {} 
}

const DashboardReducer = (state = initState, action) => {
	switch (action.type) {
		case DashboardConstant.SET_TYPE_CONTENT_COMPONENT:
			return {
				...state,
				typeContentComponent: action.typeContentComponent
			}
		case DashboardConstant.GET_LIST_ADDRESS_SUCCESS:
			return {
				...state,
				listAddress: action.listAddress
			}
		case DashboardConstant.GET_INFO_USER_SUCCESS:
			return {
				...state, 
				infoUser: action.infoUser
			}
		case DashboardConstant.UPDATE_USER_SUCCESS:
			return {
				...state,
				infoUser: {
					...state.infoUser,
					...action.data
				}
			}
		case DashboardConstant.SET_IS_EDIT:
			return {
				...state,
				isEdit: action.isEdit
			}
		case DashboardConstant.SET_TYPE_UI_ADDRESS:
			return {
				...state,
				typeUIAddress: action.typeUIAddress
			}
		case DashboardConstant.SET_REMOVE_ADDRESS_SUCCESS:
			const newListAddress = state.listAddress.filter((item) => {
				return item.id !== action.id
			}) 
			return {
				...state,
				listAddress: newListAddress || []
			}
		case DashboardConstant.SET_ADD_ADDRESS_SUCCESS:
			return {
				...state,
				listAddress: [
					...state.listAddress,
					{ ...action.data }
				]
			
			}
		case DashboardConstant.SET_UPDATE_ADDRESS_SUCCESS:
			return {
				...state,
				listAddress: state.listAddress.map((item) => {
					if (item.id === action.data.id) {
						return action.data
					}

					return item
				})
			}
		default:
			return state
	}
}

export default DashboardReducer
