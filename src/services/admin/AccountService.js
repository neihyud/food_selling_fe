const AccountService = {
	async getListStaff(axiosJwt, data) {
		try {
			const response = await axiosJwt.get('/admin/account', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async createAccount(axiosJwt, data) {
		try {
			const response = await axiosJwt.post('/admin/account', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async getAccount(axiosJwt, id) {
		try {
			const response = await axiosJwt.get(`/admin/account/${id}`)

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async updateAccount(axiosJwt, id, data) {
		try {
			const response = await axiosJwt.put(`/admin/account/${id}`, {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async deleteAccount(axiosJwt, id) {
		try {
			const response = await axiosJwt.delete(`/admin/account/${id}`)

			return response.data
		} catch (error) {
			return error.response.data
		}
	}
}

export default AccountService
