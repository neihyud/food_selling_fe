import { faCartShopping, faGear, faHome, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import routes from '../router'

const LIST_MENU = [
	{
		title: 'Dashboard',
		path: '/admin',
		icon: faHome,
		key: '1'
	},
	{
		title: 'Orders',
		icon: faCartShopping,
		key: 'sub1',
		children: [
			{
				title: 'All Order',
				path: `/admin/${routes.admin.order}`,
				key: '7'
			},
			{
				title: 'Order Pending',
				path: `/admin/${routes.admin.orderPending}`,
				key: '8'
			},
			{
				title: 'Order In Process',
				path: `/admin/${routes.admin.orderInProcess}`,
				key: '9'
			},
			{
				title: 'Order Delivered',
				path: `/admin/${routes.admin.orderDelivered}`,
				key: '10'
			},
			{
				title: 'Order Declined',
				path: `/admin/${routes.admin.orderDeclined}`,
				key: '11'
			}
		]
	},
	{
		title: 'Manage Products',
		icon: faCartShopping,
		key: 'sub2',
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
		key: 'sub3',
		children: [
			// {
			// 	title: 'Profile',
			// 	path: `/admin/${routes.admin.profile}`,
			// 	key: '4'
			// },
			{
				title: 'Staff',
				path: `/admin/${routes.admin.staff}`,
				key: '5'
			}
		]
	},
	{
		title: 'Chat',
		path: '/admin/chat',
		icon: faMessage,
		key: '6'
	},
	{
		title: 'Setting',
		icon: faGear,	
		key: 'sub4',
		children: [
			{
				title: 'Slider',
				path: `/admin/${routes.admin.slider}`,
				key: '12'
			}
		]
	}

]

export default LIST_MENU
