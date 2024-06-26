import DashboardConstant from '../../constant/DashboardConstant'

const initState = {
	typeContentComponent: DashboardConstant.TYPE_CONTENT_COMPONENT.USER,
	listAddress: [],
	infoUser: null,
	isEdit: false,
	typeUIAddress: '',
	currentAddress: {},
	listOrder: [],
	currentOrder: ''
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
		case DashboardConstant.GET_LIST_ORDER_SUCCESS: 
			return {
				...state,
				listOrder: action.listOrder
			}
		case DashboardConstant.GET_LIST_ORDER_ITEM_SUCCESS: 
			return {
				...state,
				listOrderItem: action.listOrderItem
			}
		case DashboardConstant.GET_ORDER_SUCCESS: 
			return {
				...state,
				currentOrder: action.currentOrder
			}
		default:
			return state
	}
}

export default DashboardReducer
