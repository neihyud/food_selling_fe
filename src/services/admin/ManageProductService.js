const ManageProductService = {
	
	async getListCategory(axiosJwt, data) {
		try {
			const response = await axiosJwt.get('/admin/manage-product/category', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async createCategory(axiosJwt, data) {
		try {
			const response = await axiosJwt.post('/admin/manage-product/category', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async getCategory(axiosJwt, id) {
		try {
			const response = await axiosJwt.get(`/admin/manage-product/category/${id}`)

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async updateCategory(axiosJwt, id, data) {
		try {
			const response = await axiosJwt.put(`/admin/manage-product/category/${id}`, {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},

	async deleteCategory(axiosJwt, id) {
		try {
			const response = await axiosJwt.delete(`/admin/manage-product/category/${id}`)

			return response.data
		} catch (error) {
			return error.response.data
		}
	}

}

export default ManageProductService
