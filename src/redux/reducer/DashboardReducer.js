import DashboardConstant from '../../constant/DashboardConstant'

const initState = {
	typeContentComponent: ''
}

const DashboardReducer = (state = initState, action) => {
	switch (action.type) {
		case DashboardConstant.SET_TYPE_CONTENT_COMPONENT:
			return {
				...state,
				typeContentComponent: action.typeContentComponent
			}
		default:
			return state
	}
}

export default DashboardReducer
