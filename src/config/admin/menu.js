import { faCartShopping, faHome } from '@fortawesome/free-solid-svg-icons'

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
				path: '/admin/category',
				key: '2'
			},
			{
				title: 'Products',
				path: '/admin/product',
				key: '3'
			}
		]
	},
	{
		title: 'Test',
		icon: faCartShopping,	
		key: 'sub2',
		children: [
			{
				title: 'test1',
				path: '/admin/category',
				key: 'sub3',
				children: [
					{
						title: 'test2',
						path: '/admin/category',
						key: '4'
					},
					{
						title: 'Products',
						path: '/admin/product',
						key: '5'
					}
				]
			},
			{
				title: 'Products',
				path: '/admin/product',
				key: '6'
			}
		]
		
	},

]

export default LIST_MENU
