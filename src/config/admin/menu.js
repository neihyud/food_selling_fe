import { faCartShopping, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import routes from '../router'

const LIST_MENU = [
	{
		title: 'Overview',
		path: '/admin',
		icon: faHome,
		key: '1'
	},
	{
		title: 'Manage Products',
		icon: faCartShopping,
		key: 'sub1',
		children: [
			{
				title: 'Product Categories',
				path: `/admin/${routes.admin.category}`,
				key: '2'
			},
			{
				title: 'Products',
				path: `/admin/${routes.admin.product}`,
				key: '3'
			}
		]
	},
	{
		title: 'Account',
		icon: faUser,	
		key: 'sub2',
		children: [
			{
				title: 'Profile',
				path: `/admin/${routes.admin.profile}`,
				key: '4'
			},
			{
				title: 'Staff',
				path: `/admin/${routes.admin.staff}`,
				key: '5'
			}
		]
		
	}

]

export default LIST_MENU
