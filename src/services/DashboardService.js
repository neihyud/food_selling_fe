const DashboardService = {
	async getListAddress(axiosJwt) {
		try {
			const response = await axiosJwt.get('/user/address')

			return response.data
		} catch (error) {
			return error.response.data
		}
	}
}

export default DashboardService
