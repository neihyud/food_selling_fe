import PageConstant from '../../../constant/admin/PageConstant'

const initState = {
	loading: false,
	keyPathMenu: ['1'],
	prevPage: ''
}

const PageReducer = (state = initState, action) => {
	switch (action.type) {
		case PageConstant.SET_KEY_PATH_MENU:
			return {
				...state,
				keyPathMenu: action.keyPathMenu
			}
		case PageConstant.SET_PREV_PAGE:
			return {
				...state,
				prevPage: ''
			}
		default:
			return state
	}
}

export default PageReducer
