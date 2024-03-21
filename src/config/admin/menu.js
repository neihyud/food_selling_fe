import { faCartShopping, faHome } from '@fortawesome/free-solid-svg-icons'

const LIST_MENU = [
	{
		title: 'Overview',
		path: '/admin',
		icon: faHome,
	},
	{
		title: 'Manage Products',
		icon: faCartShopping,

		children: [
			{
				title: 'Product Categories',
				path: '/admin/category',
			},
			{
				title: 'Products',
				path: '/admin/product',
			}
		]
		
	},

]

export default LIST_MENU
