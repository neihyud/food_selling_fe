import AuthConstant from '../../../constant/admin/AuthConstant'

const AuthAction = {
	setCredentials(credentials) {
		return {
			type: AuthConstant.SET_CREDENTIALS,
			credentials
		}
	},
  
}

export default AuthAction
