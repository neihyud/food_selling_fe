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
	},
	async addAddress(axiosJwt, data) {
		try {
			const response = await axiosJwt.post('/user/address', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},
	async removeAddress(axiosJwt, id) {
		try {
			const response = await axiosJwt.delete(`/user/address/${id}`)

			return response.data
		} catch (error) {
			return error.response.data
		}
	},
	async editAddress(axiosJwt, data) {
		try {
			const response = await axiosJwt.put(`/user/address/${data.id}`, {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		} 
	}
}

export default DashboardService
