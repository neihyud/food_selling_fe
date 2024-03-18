import config from '../config/index'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Cart from '../pages/Cart'
import UserDashboard from '../pages/UserDashboard'

import DefaultLayout from '../layouts/DefaultLayout/DefaultLayout.jsx'
import Checkout from '../components/Checkout'
import Auth from '../pages/Admin/Auth.jsx'
import Dashboard from '../pages/Admin/Dashboard.jsx'
import AdminDefaultLayout from '../layouts/DefaultLayout/AdminDefaultLayout.jsx'

const { routes } = config

const publicRoutes = [
	{
		path: routes.home,
		component: Home,
		layout: DefaultLayout
	},
	{
		path: routes.about,
		component: About,
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
	},
]

const privateRoutes = []

const adminPublicRouter = [
	{
		path: routes.admin.auth,
		component: Auth,
	},
	{
		path: routes.admin.dashboard,
		component: Dashboard,
		layout: AdminDefaultLayout
	}
]

export { publicRoutes, privateRoutes, adminPublicRouter }
