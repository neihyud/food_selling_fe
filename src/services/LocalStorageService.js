import DashboardConstant from '../constant/DashboardConstant'

const LocalStorageService = {
	setToken(token) {
		localStorage.setItem('token', JSON.stringify(token))
	},

	setTokenAdmin(token) {
		localStorage.setItem('token_ad', JSON.stringify(token))
	},

	removeTokenAdmin() {
		localStorage.removeItem('token_ad')
	},

	getTokenAdmin() {
		return JSON.parse(localStorage.getItem('token_ad'))
	},

	removeToken() {
		return localStorage.removeItem('token')
	},
	
	getToken() {
		return JSON.parse(localStorage.getItem('token'))
	},

	setUser(user) {
		localStorage.setItem('user', JSON.stringify(user))
	},

	getUser() {
		return JSON.parse(localStorage.getItem('user'))
	},

	setSessionIdQuery(session_id) {
		localStorage.setItem('session_id', JSON.stringify(session_id))
	},
	
	getSessionIdQuery() {
		return JSON.parse(localStorage.getItem('session_id'))
	},

	getUserName() {
		return JSON.parse(localStorage.getItem('user'))?.name
	},
	
	getUserImage() {
		return JSON.parse(localStorage.getItem('user'))?.img || DashboardConstant.IMG_USER_DEFAULT
	},
	
	setInfoStaffStore(user) {
		return localStorage.setItem('user_store', JSON.stringify(user))
	},

	getInfoStaffStore() {
		return JSON.parse(localStorage.getItem('user_store')) 
	}
	
}

export default LocalStorageService
