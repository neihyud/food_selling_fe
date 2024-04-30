const routes = {
	home: '/',
	about: '/about',
	dashboard: '/dashboard',
	checkout: 'checkout',
	order: '/order/success',
	orderSuccess: '/order/success',
	login: 'login',
	register: 'register',
	menu: 'menu',
  
	admin: {
		home: '',
		auth: 'login',
		dashboard: 'dashboard',
		category: 'category',
		categoryEdit: 'category/:id/edit',
		categoryCreate: 'category/create',
		product: 'product',
		productEdit: 'product/:id/edit',
		productCreate: 'product/create',
		profile: 'profile',
		staff: 'account',
		staffCreate: 'account/create',
		staffEdit: 'account/:id/edit',
		chat: 'chat',
		order: 'order',
		orderDetail: 'order/:id/',
		orderPending: 'order/pending',
		orderInProcess: 'order/in-process',
		orderDelivered: 'order/order-delivered',
		orderDeclined: 'order/order-declined',
		slider: 'setting/slider',
		sliderCreate: 'setting/slider/create',
		sliderEdit: 'setting/slider/:id/edit'
	}
}

export default routes
