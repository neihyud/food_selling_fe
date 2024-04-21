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
	},
	async getListProduct(axiosJwt, data = '') {
		let query = ''
		if (data) {
			query = Object.keys(data).map((q) => {
				return `${q}=${data[q]}`
			}).join('&')
		}
		
		try {
			const response = await axiosJwt.get(`/category/product?${query}`)

			return response.data
		} catch (error) {
			return error.response.data
		}
	}
}

export default HomeService
