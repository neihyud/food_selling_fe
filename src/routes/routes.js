import config from '../config/index'

import About from '../pages/About/About'
import Cart from '../pages/Cart'
import Home from '../pages/Home/Home'
import UserDashboard from '../pages/UserDashboard'

import Checkout from '../components/Checkout'
import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.jsx'
import Auth from '../pages/Admin/Auth.jsx'
import Dashboard from '../pages/Admin/Dashboard.jsx'

import CategoryManagement from '../components/Admin/ManageProduct/Category/CategoryManagement.jsx'
import Category from '../components/Admin/ManageProduct/Category/index.jsx'
import ProductManagement from '../components/Admin/ManageProduct/Product/ProductManagement.jsx'
import Product from '../components/Admin/ManageProduct/Product/index.jsx'
import Overview from '../components/Admin/Overview/Overview.jsx'
import AdminDefaultLayout from '../layouts/DefaultLayout/AdminDefaultLayout.jsx'
import Staff from '../components/Admin/Account/Staff/index.jsx'

const { routes } = config

const publicRoutes = [
	{
		path: routes.home,
		component: Home,
		layout: DefaultLayout
	},
	{
		path: routes.about,
		component: About
	},
	{
		path: routes.cart,
		component: Cart,
		layout: DefaultLayout
	},
	{
		path: routes.dashboard,
		component: UserDashboard,
		layout: DefaultLayout
	},
	{
		path: routes.checkout,
		component: Checkout,
		layout: DefaultLayout
	}
]

const privateRoutes = []

const adminPublicRouter = [
	{
		path: routes.admin.auth,
		component: Auth
	},
	{
		path: routes.admin.home,
		component: Overview,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.dashboard,
		component: Dashboard,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.category,
		component: Category,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.categoryEdit,
		component: CategoryManagement,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.categoryCreate,
		component: CategoryManagement,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.product,
		component: Product,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.productEdit,
		component: ProductManagement,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.productCreate,
		component: ProductManagement,
		layout: AdminDefaultLayout
	},
	{
		path: routes.admin.profile,
		component: Product,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.staff,
		component: Staff,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.staffCreate,
		component: Staff,
		layout: AdminDefaultLayout
	},
	{ 
		path: routes.admin.staffEdit,
		component: ProductManagement,
		layout: AdminDefaultLayout
	}
]

export { adminPublicRouter, privateRoutes, publicRoutes }

