const AuthService = {
	async handleLogin(axios, data) {
		try {
			const response = await axios.post('/auth/admin/login', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	}

}

export default AuthService
