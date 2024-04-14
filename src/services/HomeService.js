const HomeService = {
	async getProductByCategoryId(axiosJwt, categoryId) {
		try {
			const response = await axiosJwt.get(`/category/${categoryId}/product`)

			return response.data
		} catch (error) {
			return error.response.data
		}
	},
	async getListCategory(axiosJwt) {
		try {
			const response = await axiosJwt.get('/category')

			return response.data
		} catch (error) {
			return error.response.data
		}
	}
}

export default HomeService
