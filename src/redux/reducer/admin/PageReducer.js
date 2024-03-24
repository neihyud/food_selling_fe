import PageConstant from '../../../constant/admin/PageConstant'

const initState = {
	loading: false,
	keyPathMenu: ['1']
}

const PageReducer = (state = initState, action) => {
	switch (action.type) {
		case PageConstant.SET_KEY_PATH_MENU:
			return {
				...state,
				keyPathMenu: action.keyPathMenu
			}
		default:
			return state
	}
}

export default PageReducer
