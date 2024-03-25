const routes = {
	home: '/',
	about: '/about',
	cart: '/cart',
	dashboard: '/dashboard',
	checkout: 'checkout',
  
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
		staffEdit: 'account/:id/edit'
	}
}

export default routes
