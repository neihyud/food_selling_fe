const DashboardService = {
	async getListAddress(axiosJwt) {
		try {
			const response = await axiosJwt.get('/user/address')

			return response.data
		} catch (error) {
			return error.response.data
		}
	},
	async getInfoUser(axiosJwt) {
		try {
			const response = await axiosJwt.get('/user')

			return response.data
		} catch (error) {
			return error.response.data
		}
	},
	async updateUser(axiosJwt, data) {
		try {
			const response = await axiosJwt.post('/user', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	}
}

export default DashboardService
