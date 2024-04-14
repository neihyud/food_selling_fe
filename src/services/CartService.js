const CartService = {
	async handleCheckout(axiosJwt, data) {
		try {
			const response = await axiosJwt.post('/create-checkout-session', {
				...data
			})

			return response.data
		} catch (error) {
			return error.response.data
		}
	},
	async handleCheckoutSuccess(axiosJwt, data) {
		try {
			const response = await axiosJwt.post('/stripe-success', data)

			return response.data
		} catch (error) {
			return error.response.data
		}
	}
}

export default CartService
