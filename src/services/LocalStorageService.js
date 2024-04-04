const LocalStorageService = {
	setToken(token) {
		localStorage.setItem('token', JSON.stringify(token))
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
		localStorage.getItem('session_id')
	}
}

export default LocalStorageService
