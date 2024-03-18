import AuthConstant from '../../../constant/admin/AuthConstant'

const initState = {
	credentials: null,
	errorValidate: null
}

const AuthReducer = (state = initState, action) => {
	switch (action.type) {
		case AuthConstant.SET_CREDENTIALS:
			return {
				...state,
				credentials: action.credentials
			}
		default:
			return state
	}
}

export default AuthReducer
