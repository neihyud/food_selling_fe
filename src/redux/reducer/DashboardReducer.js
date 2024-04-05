import DashboardConstant from '../../constant/DashboardConstant'

const initState = {
	typeContentComponent: '',
	listAddress: [],
	infoUser: null
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
		default:
			return state
	}
}

export default DashboardReducer
